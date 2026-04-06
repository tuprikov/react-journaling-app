import React from 'react'

const Tabs = () => {
    const [selectedTab, setSelectedTab] = React.useState('add')

    const handleToggleTab = (selectedTab: string) => {
        setSelectedTab(selectedTab)
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
