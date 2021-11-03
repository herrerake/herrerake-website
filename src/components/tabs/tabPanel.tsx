import React, { FC, useContext } from "react"
import { TabId } from "./tabs"
import { TabsContext } from "./tabsContext"

type TabPanelCssProps = {}

export type TabPanelProps = {
  tabId: TabId
} & TabPanelCssProps

const TabPanel: FC<TabPanelProps> = ({ tabId, children }) => {
  const { selectedTabId } = useContext(TabsContext)

  return tabId === selectedTabId ? <>{children}</> : null
}

TabPanel.displayName = "Tabs.TabPanel"

export { TabPanel }
