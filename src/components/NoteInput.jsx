"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export const NoteInput = () => {
    const router = useRouter();
    const [note, setNote] = useState('');

    async function createNote() {
        const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/notes/records", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: note, user: "mzsjdh@gmail.com", additionalData: "" }),
        });
        const data = await res.json();
        // console.log(data);
        router.refresh();
    }

  return (
      <div className="mt-3 flex gap-2 mb-20">
          <input onChange={(e) => setNote(e.target.value)} className="border-2 rounded-lg border-indigo-500 p-2"/>
          <button onClick={createNote} className="bg-indigo-400 p-1 rounded-md text-white text-s">Add Note</button>
    </div>
  )
}
