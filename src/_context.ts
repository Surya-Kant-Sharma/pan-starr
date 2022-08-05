import { useEffect, FC, createContext, useContext, useState } from "react";

let intial_value: any = {};

export const AppContext = createContext(intial_value);

export function useAppContext() {
  return useContext(AppContext);
}
