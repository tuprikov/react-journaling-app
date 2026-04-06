import { useEffect, useState } from 'react'

const JournalList = () => {
    useEffect(() => {
        const hasJournals = localStorage.getItem('journals')
        const journalEntries = hasJournals ? JSON.parse(hasJournals) : []

        setJournals(journalEntries)
        console.log(journalEntries)
    }, [])

    const [journals, setJournals] = useState([
        {
            id: '',
            title: '',
            emotion: '',
            body: '',
            createdAt: ''
        }
    ])

    return (
        <div className="grid grid-cols-2 gap-4">
            {journals.map(journal => (
                <span className="rounded-lg bg-white p-4" key={journal.id}>
                    <h3 className="mb-2 text-xl font-bold">{journal.title}</h3>

                    <h4>Created at {journal.createdAt}</h4>
                </span>
            ))}
        </div>
    )
}

export default JournalList
