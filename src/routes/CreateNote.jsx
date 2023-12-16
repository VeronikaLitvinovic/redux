import React, { useState } from "react"
import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { selectUserId } from "../redux/user/selectors"

export default function CreateNote() {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  const authorId = useSelector(selectUserId)

  const navigate = useNavigate()

  const handleSave = () => {
    fetch(`http://localhost:5001/notes`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Date.now(),
        title: title,
        content: text,
        authorId: authorId,
      }),
    }).then (() => {
      navigate('/notes')
    })
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create Note</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>

      <div className="mb-4">
        <textarea
          placeholder="Text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>

      <div className="flex items-center">
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow mr-2"
        >
          Save
        </button>

        <NavLink
          to="/notes"
          className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded shadow"
        >
          Back
        </NavLink>
      </div>
    </div>
  )
}