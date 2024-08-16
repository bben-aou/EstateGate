import { THeaderContext } from "@interfaces/contexts/types";
import { createContext } from "react";

export const HeaderContext = createContext<THeaderContext | null>(null);