import React, { useState } from 'react'

interface TabsProps {
    onSelectTab: (tab: string) => void
}

const Tabs = ({ onSelectTab }: TabsProps) => {
    const [selectedTab, setSelectedTab] = useState('add')

    const handleToggleTab = (selectedTab: string) => {
        setSelectedTab(selectedTab)
        onSelectTab(selectedTab)
    }

    return (
        <div role="tablist" className="tabs tabs-box tabs-sm">
            <a
                role="tab"
                className={`tab flex-1 ${selectedTab === 'add' && 'tab-active font-bold'}`}
                onClick={() => handleToggleTab('add')}
            >
                Add Entry
            </a>
            <a
                role="tab"
                className={`tab flex-1 ${selectedTab === 'entries' && 'tab-active font-bold'}`}
                onClick={() => handleToggleTab('entries')}
            >
                Journal Entries
            </a>
        </div>
    )
}

export default Tabs
