import { NavLink, Outlet, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { selectUserEmail } from "../redux/user/selectors"
import { layout } from "../redux/user/actions"

export default function Home() {
  const location = useLocation()
  const dispatch = useDispatch()
  const userEmail = useSelector(selectUserEmail)

  const handleLayout = () => {
    dispatch(layout())
  }

  return (
    <div>
      <header className="flex gap-10 items-center bg-white py-4 px-8">
        <div>
          <h1 className="text-xl font-semibold">Hello, {userEmail}</h1>
        </div>
        <div className="flex gap-5 ml-auto">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            About
          </NavLink>
          <NavLink
            to="/notes"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Notes
          </NavLink>
          <button
            onClick={handleLayout}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Log Out
          </button>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <Outlet />
      </main>

      <footer className="flex items-center justify-between bg-white py-4 px-8 text-sm">
        <p>Created by: Litvinovich Veronika</p>
        <p>BSU: 2023</p>
      </footer>
    </div>
  )
}