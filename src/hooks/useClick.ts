import { useContext } from "react"
import ClickContext, { ClickContextType } from "src/contexts/click/ClickContext"

export const useClick = () => {
  const context = useContext<ClickContextType | null>(ClickContext);
  if (!context) throw new Error("ClickContext must be within ClickProvider");
  return context;
}