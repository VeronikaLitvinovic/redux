import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectUserId } from '../redux/user/selectors'
import {
  selectNotes,
  selectNotesError,
  selectNotesLoading,
} from '../redux/notes/selectors'
import { getNotes, deleteNote } from '../redux/notes/actions'

export default function Notes() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authorId = useSelector(selectUserId)
  const notes = useSelector(selectNotes)
  const loading = useSelector(selectNotesLoading)
  const error = useSelector(selectNotesError)

  useEffect(() => {
    dispatch(getNotes(authorId))
  }, [authorId, dispatch])

  const handleEditNote = (noteId) => {
    navigate(`/notes/${noteId}/edit`)
  }

  const handleDeleteNote = (noteId) => {
    dispatch(deleteNote(noteId))
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  const sortedNotes = Array.isArray(notes) ? [...notes].sort((a, b) => b.createdAt - a.createdAt) : []

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Мои заметки</h1>
      <NavLink
        to="/createNote"
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow mr-2"
      >
        Add new note
      </NavLink>
      <div>
        {sortedNotes.map((note) => (
          <div key={note.id} className="bg-white p-4 mb-4 rounded shadow">
            <h2 className="text-lg font-medium mb-1">{note.title}</h2>
            <p className="text-sm text-gray-600 mb-2">
              {note.createdDate && new Date(note.createdDate).toLocaleDateString()}
            </p>
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleEditNote(note.id)}
                className="text-blue-500 hover:text-blue-700 mr-2"
              >
                ✍️
              </button>
              <button
                onClick={() => handleDeleteNote(note.id)}
                className="text-red-500 hover:text-red-700"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}