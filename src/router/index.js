import { createBrowserRouter } from "react-router-dom"
import Layout from '@/views/Layout'
import Home  from '@/views/Home'
import Todo  from '@/views/Todo'
import Message  from '@/views/Message'
import PersonalCenter  from '@/views/PersonalCenter'

const routes = [
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        path:'home',
        element:<Home />
      },
      {
        path:'todo',
        element:<Todo />
      },
      {
        path:'message',
        element:<Message />
      },
      {
        path: 'personalCenter',
        element:<PersonalCenter />
      }
    ]

  }
]

const router = createBrowserRouter(routes)
export default router