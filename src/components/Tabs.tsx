import React from 'react'

interface TabsProps {
    currentTab: string
    setCurrentTab: (tab: string) => void
}

const Tabs = ({ currentTab, setCurrentTab }: TabsProps) => {
    const handleToggleTab = (selectedTab: string) => {
        setCurrentTab(selectedTab)
    }

    return (
        <div role="tablist" className="tabs tabs-box tabs-sm">
            <a
                role="tab"
                className={`tab flex-1 ${currentTab === 'add' && 'tab-active font-bold'}`}
                onClick={() => handleToggleTab('add')}
            >
                Add Entry
            </a>
            <a
                role="tab"
                className={`tab flex-1 ${currentTab === 'entries' && 'tab-active font-bold'}`}
                onClick={() => handleToggleTab('entries')}
            >
                Journal Entries
            </a>
        </div>
    )
}

export default Tabs
