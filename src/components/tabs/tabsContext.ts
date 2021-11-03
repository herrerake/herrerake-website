import React from "react"
import { TabId } from "./tabs"

export type Context = {
  selectedTabId: TabId
  setSelectedTabId: (tabId: TabId) => void
}

export const TabsContext = React.createContext<Context>({
  selectedTabId: "",
  setSelectedTabId: () => {},
})
