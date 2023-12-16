import React, { useState, useEffect } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { updateNote } from "../redux/notes/actions"
import { selectNoteById } from "../redux/notes/selectors"

export default function EditNote() {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const navigate = useNavigate()
  const { noteId } = useParams()
  const note = useSelector((state) => selectNoteById(state, noteId))
  const dispatch = useDispatch()

  useEffect(() => {
    if (note) {
      setTitle(note.title)
      setText(note.text)
    }
  }, [note])

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const handleSaveNote = () => {
    const editNote = {
      ...note,
      title: title,
      text: text,
    }

    dispatch(updateNote(editNote))

    navigate("/notes")
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Note</h1>

      <div className="mb-4">
        <label className="font-semibold">Note Title:</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="font-semibold">Note Text:</label>
        <textarea
          value={text}
          onChange={handleTextChange}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>

      <div className="flex items-center">
        <button
          onClick={handleSaveNote}
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