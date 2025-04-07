import { createContext } from "react"

export type ClickContextType = {
  state: boolean,
  onClick: () => void
}

const ClickContext = createContext<ClickContextType | null>(null);

export default ClickContext;