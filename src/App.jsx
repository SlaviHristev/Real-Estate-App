
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout, RequireAuth } from './pages/layout/Layout'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Login from './pages/login/Login'
import SinglePage from './pages/singlePage/SinglePage'
import Profile from './pages/profile/Profile'
import Register from './pages/register/Register'
import ProfileUpdate from './pages/profileUpdate/ProfileUpdate'
import CreatePost from './pages/createPost/CreatePost'
import { listPageLoader, profilePageLoader, singlePageLoader } from './lib/loaders'



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout />
      ),
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: "/list",
          element: <List />,
          loader: listPageLoader,
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/:id',
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: '/register',
          element: <Register />
        },

      ]
    },
    {
      path: '/',
      element: <RequireAuth />,
      children: [
        {
          path: '/profile',
          element: <Profile />,
          loader: profilePageLoader
        },
        {
          path: '/profile/update',
          element: <ProfileUpdate />
        },
        {
          path: '/add',
          element: <CreatePost />
        },
      ]
    }
  ])

  return (

    <RouterProvider router={router} />
  )
}

export default App