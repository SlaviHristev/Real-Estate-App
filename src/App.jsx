
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Login from './pages/login/Login'
import SinglePage from './pages/singlePage/SinglePage'
import Profile from './pages/profile/Profile'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:(
        <Layout/>
      ),
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/list',
          element:<List/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/:id',
          element:<SinglePage/>
        },
        {
          path:'/profile',
          element:<Profile/>
        }
      ]
    },
  ])

  return (
    
    <RouterProvider router={router}/>
  )
}

export default App