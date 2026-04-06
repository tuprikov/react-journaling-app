import Tabs from './components/Tabs'

const App = () => {
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
                <Tabs />

                {/* Form */}
                <form className="flex flex-col gap-3">
                    <label className="input group w-full">
                        Journal Title
                        <input
                            type="text"
                            className="grow"
                            placeholder="Give your journal entry a title"
                        />
                        <span className="badge badge-neutral badge-xs">
                            Optional
                        </span>
                    </label>

                    <div className="flex flex-col">
                        <label className="form-control w-full">
                            How are you feeling today?
                        </label>
                        <select
                            defaultValue="Happy"
                            className="select select-bordered w-full"
                        >
                            <option selected>Happy</option>
                            <option>Neutral</option>
                            <option>Sad</option>
                        </select>
                    </div>

                    <textarea
                        className="textarea textarea-bordered w-full"
                        placeholder="Write something here..."
                        rows={10}
                    ></textarea>

                    <button className="btn btn-primary">Save Journal</button>
                </form>
            </div>
        </div>
    )
}

export default App
