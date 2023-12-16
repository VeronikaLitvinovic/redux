import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import SignUp from './routes/SignUp.jsx'
import Login from './routes/Login.jsx'
import Layout from './routes/Layout.jsx'
import Notes from './routes/Notes.jsx'
import About from './routes/About.jsx'
import UserContextProvider from './components/UserContextProvider.jsx'
import RequireAuth from './components/RequireAuth.jsx'
import CreateNote from './routes/CreateNote.jsx'
import ViewNote from './routes/ViewNote.jsx'
import EditNote from './routes/EditNote.jsx'
import { Provider } from 'react-redux'
import store, {persistor} from './redux'
import { PersistGate } from 'redux-persist/integration/react'

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/notes',
        element: <Notes />,
      },
      {
        path: '/createNote',
        element: <CreateNote />,
      },
      {
        path: '/notes/:noteId',
        element: <ViewNote />,
      },
      {
  path: '/notes/:noteId/edit',
  element: <EditNote />,
},
    ],
  },
])

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  )
}