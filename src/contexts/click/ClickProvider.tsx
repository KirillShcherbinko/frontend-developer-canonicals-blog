import { ReactNode } from "react";
import ClickContext from "./ClickContext";

interface ClickProviderProps {
  state: boolean;
  onClick: () => void;
  children: ReactNode;
}

export const ClickProvider = ({state, onClick, children}: ClickProviderProps) => {
  return (
    <ClickContext.Provider value={{ state, onClick }}>
      {children}
    </ClickContext.Provider>
  );
}