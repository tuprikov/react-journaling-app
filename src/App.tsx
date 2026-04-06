import { useState } from 'react'
import AddJournalForm from './components/AddJournalForm'
import JournalList from './components/JournalList'
import Tabs from './components/Tabs'

const App = () => {
    const [currentTab, setCurrentTab] = useState('add')
    return (
        <div className="mx-auto flex w-[640px] flex-col py-4">
            <div className="flex flex-col gap-2 rounded-xl bg-white p-4">
                {/* Header */}
                <header>
                    <h1 className="mb-4 border-b border-gray-300 text-2xl font-bold">
                        Journal App
                    </h1>
                    <p>
                        Write down your thoughts, celebrate small wins, and grow
                        through daily reflection in a safe, uplifting space.
                    </p>
                </header>

                {/* Tabs */}
                <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />

                {/* Form */}
                <div className="flex flex-col gap-3 rounded-xl bg-gray-200 p-4">
                    {currentTab === 'add' ? (
                        <AddJournalForm />
                    ) : (
                        <JournalList />
                    )}
                </div>
            </div>
        </div>
    )
}

export default App
