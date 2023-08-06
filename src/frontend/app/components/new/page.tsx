'use client'

import { useState } from "react"

export default function ComponentAddPage() {
    const [name, setName] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)
    return <>
        <form
            className="flex flex-col gap-2"
            onSubmit={event => {
                fetch(`${process.env.NEXT_PUBLIC_API_HOST}/component?Name=${name}`, {
                    method: 'POST',
                    cache: 'no-cache'
                }).then(() => {
                    setIsSuccess(true)
                    setTimeout(() => setIsSuccess(false), 3000)
                }).catch(() => setIsSuccess(false))
                event.preventDefault()
            }}>
            <div className="flex flex-col">
                <label htmlFor='component-name'>Name</label>
                <div className="flex flex-row gap-2">
                    <input
                        id="component-name"
                        className="border p-2"
                        type="text" value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <input className="border p-2" type="submit" />
                </div>
            </div>
        </form>
        { isSuccess && <span className="text-green">Added record</span>}
    </>
}