import React, { FC, useState } from "react"
import { Tab, TabProps } from "./tab"
import { TabList, TabListProps } from "./tabList"
import { TabPanel, TabPanelProps } from "./tabPanel"
import { TabsContext } from "./tabsContext"

type TabsComposition = {
  Tab: FC<TabProps>
  TabList: FC<TabListProps>
  TabPanel: FC<TabPanelProps>
}

export type TabId = string | number | {}

export type TabsProps = {
  defaultTabId: TabId
}

const Tabs: FC<TabsProps> & TabsComposition = ({ defaultTabId, children }) => {
  const [selectedTabId, setSelectedTabId] = useState<TabId>(defaultTabId)

  return (
    <TabsContext.Provider
      value={{
        selectedTabId,
        setSelectedTabId: (tabId): void => setSelectedTabId(tabId),
      }}
    >
      {children}
    </TabsContext.Provider>
  )
}

Tabs.Tab = Tab
Tabs.TabList = TabList
Tabs.TabPanel = TabPanel

Tabs.displayName = "Tabs"

export { Tabs }
