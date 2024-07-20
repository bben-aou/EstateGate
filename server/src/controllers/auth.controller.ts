import { Response, Request } from "express";
import { hashPassword } from "@utils/hashPassword";
import prisma from "@lib/prisma";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  console.log("register endpoint", req.body);
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Hash the password before storing it in the database
    const hashedPassword = await hashPassword(password);

    // Create a new user in the database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  console.log("login endpoint");
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  try {
    // Checking if the user already exists
    const user = await prisma.user.findUnique({
      where: { username: username },
    });
    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // Checking if the password matches
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // Generate JWT token
    const secretKey = process.env.JWT_SECRET_KEY;
    const tokenValidityPeriod = 1000 * 24 * 60 * 60 * 7;

    if (!secretKey) {
      throw new Error("JWT_SECRET_KEY is not defined");
    }

    const token = jwt.sign({ id: user.id }, secretKey, {
      expiresIn: tokenValidityPeriod,
    });

    // Set JWT cookie to the response
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: tokenValidityPeriod,
      })
      .status(200)
      .json({ message: "Login successful" });
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = (req: Request, res: Response) => {
  console.log("logout endpoint");
  try{
      res.clearCookie("token").status(200).json({ message: "Logout successful" });
  }
  catch(error){
    console.log("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
