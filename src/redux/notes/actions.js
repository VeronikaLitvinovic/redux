export const getNotes = (authorId) => async (dispatch) => {
  try {
    dispatch({ type: 'NOTES/LOADING' })
    const params = new URLSearchParams({ authorId }).toString()
    const notes = await fetch(`http://localhost:5001/notes?${params}`).then(
      (r) => r.json()
    )
    dispatch({ type: 'NOTES/SET', payload: notes })
  } catch (err) {
    dispatch({ type: 'NOTES/ERROR', payload: err.toString() })
  }
}

export const deleteNote = (noteId) => async (dispatch) => {
  try {
    dispatch({ type: 'NOTES/DELETE', payload: noteId })
    await fetch(`http://localhost:5001/notes/${noteId}`, {
      method: 'DELETE',
    })
  } catch (error) {
    dispatch({ type: 'NOTES/ERROR', payload: error.toString() })
  }
}

export const updateNote = (editNote) => async (dispatch) => {
  try {
    dispatch({ type: 'NOTES/UPDATE', payload: editNote })
    await fetch(`http://localhost:5001/notes/${editNote.noteId}`, {
      method: 'PUT',
      body: JSON.stringify(editNote),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    dispatch({ type: 'NOTES/ERROR', payload: error.toString() })
  }
}