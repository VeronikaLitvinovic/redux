import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectCreatedAt, selectUserEmail, selectUserId } from '../redux/user/selectors'
import { selectNotes, selectNotesError, selectNotesLoading } from '../redux/notes/selectors'
import { getNotes } from '../redux/notes/actions'


export default function About() {
  const dispatch = useDispatch()
  const loading = useSelector(selectNotesLoading)
  const error = useSelector(selectNotesError)
const userEmail = useSelector(selectUserEmail)
const userCreatedAt = useSelector(selectCreatedAt)

  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div>
      <div>
        <h1>About me</h1>
      </div>
      <div>
        <p>Email: {userEmail}</p>
        <p>Date sign up: {userCreatedAt}</p>
      </div>
      <NavLink
        to="/notes"
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Go to notes
      </NavLink>
    </div>
  )
}