import { useForm, type FieldValues } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    title: z.string({ required_error: 'Title is required.' }).min(3, {
        message: 'The title must be at least 3 characters long.'
    }),
    emotion: z
        .string({ required_error: "Please specify how you're feeling today." })
        .min(3, { message: 'The emotion must be at least 3 characters long.' }),
    body: z
        .string({
            required_error: 'Please write something in your journal entry.'
        })
        .min(10, {
            message: 'The journal entry must be at least 10 characters long.'
        })
})

type FormData = z.infer<typeof schema>

const AddJournalForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormData>({ resolver: zodResolver(schema) })

    const onFormSubmit = (data: FieldValues) => {
        console.log('Form submitted:', data)
        reset()
    }

    return (
        <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(onFormSubmit)}
        >
            <label className="input group w-full">
                Journal Title
                <input
                    type="text"
                    className="grow"
                    placeholder="Give your journal entry a title"
                    {...register('title')}
                />
                {errors.title && (
                    <span className="text-sm text-red-500">
                        {errors.title.message}
                    </span>
                )}
                <span className="badge badge-neutral badge-xs">Optional</span>
            </label>

            <div className="flex flex-col">
                <label htmlFor="emotions" className="form-control w-full">
                    How are you feeling today?
                </label>
                <select
                    id="emotions"
                    className="select select-bordered w-full"
                    {...register('emotion')}
                >
                    <option selected>Happy</option>
                    <option>Neutral</option>
                    <option>Sad</option>
                </select>
                {errors.emotion && (
                    <span className="text-sm text-red-500">
                        {errors.emotion.message}
                    </span>
                )}
            </div>

            <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Write something here..."
                rows={10}
                {...register('body')}
            ></textarea>
            {errors.body && (
                <span className="text-sm text-red-500">
                    {errors.body.message}
                </span>
            )}

            <button className="btn btn-primary">Save Journal</button>
        </form>
    )
}

export default AddJournalForm
