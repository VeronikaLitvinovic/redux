import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { saveUserData } from '../redux/user/actions'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleSignUp() {
    try {
      const userData = {
        email,
        password,
        createsAt: Date.now(),
      }

      fetch('http://localhost:5001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then(() => {
          dispatch(saveUserData(userData))

          navigate('/about')
        })
        .catch((error) => {
          setError(error.toString())
        })
    } catch (err) {
      setError(err.toString())
    }
  }

  return (
    <div className="prose flex flex-col gap-5">
      <h1>Sign Up</h1>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        placeholder="Repeat Password"
        type="password"
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <button
        onClick={handleSignUp}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Sign up
      </button>

      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  )
}