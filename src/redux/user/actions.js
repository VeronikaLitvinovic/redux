export const getUser = (email, password) => async (dispatch) => {
    dispatch({ type: 'USER/LOADING/SET' })
    const query = new URLSearchParams({ email, password }).toString()
    const users = await fetch(`http://localhost:5001/users?${query}`).then((r) =>
      r.json()
    )
    const user = users[0]
    if (user) {
      dispatch({ type: 'USER/SET', payload: user })
    } else {
      throw new Error('Invalid user')
    }
  }

export const saveUserData = (userData) => async (dispatch) => {
  try {
    dispatch({ type: 'USER/SAVE', payload: userData })
    await fetch(`http://localhost:5001/notes/${userData}`, {
      method: 'DELETE',
    })
  } catch (error) {
    dispatch({ type: 'USER/ERROR', payload: error.toString() })
  }
}

export const layout = () => ({
  type: "LAYOUT",
})