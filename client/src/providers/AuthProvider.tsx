import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { getCookie } from "@/utils/getCookie";
import {
  AuthContextType,
  AuthProviderProps,
  TLoginRequestBody,
  TRegisterBody,
  User,
} from "@/interfaces/providers/auth.types";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshAccessToken = async () => {
    if (isRefreshing) return null;
    setIsRefreshing(true);
    try {
      const response = await api.post("/auth/refresh-token");
      setIsRefreshing(false);
      const newAccessToken = response.data.accessToken;
      localStorage.setItem("accessToken", newAccessToken);
      api.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
      return newAccessToken;
    } catch (error) {
      setIsRefreshing(false);
      localStorage.removeItem("accessToken");
      api.defaults.headers.common["Authorization"] = "";
      return null;
    }
  };
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const accessToken = await refreshAccessToken();
        if (accessToken) {
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          return api(originalRequest);
        }
      }
      return Promise.reject(error);
    }
  );

  const fetchUser = async () => {
    try {
      const response = await api.get("/auth/me");
      setUser(response.data.user);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        localStorage.removeItem("accessToken");
        api.defaults.headers.common["Authorization"] = "";
      }
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token =
        localStorage.getItem("accessToken") || getCookie("accessToken");
      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await fetchUser();
      } else {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (data: TLoginRequestBody) => {
    const { email, password } = data;
    try {
      const response = await api.post("/auth/login", { email, password });
      const accessToken = response.data.accessToken;
      api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      localStorage.setItem("accessToken", accessToken);
      await fetchUser();
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
      setUser(null);
      api.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("accessToken");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const register = async (data: TRegisterBody) => {
    const { email, password, firstName, lastName, phoneNumber } = data;
    try {
      const response = await api.post("/auth/register", {
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
      });
      const accessToken = response.data.accessToken;
      api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      localStorage.setItem("accessToken", accessToken);
      await fetchUser();
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default api;
