import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './component/Root/Root.jsx'
import Home from './component/Home/Home.jsx'
import Mobile from './component/Mobile/Mobile.jsx'
import Laptops from './component/Laptops/Laptops.jsx'
import Users from './component/Users/Users.jsx'
import User2 from './component/User2/User2.jsx'
import User from './component/User/User.jsx'
import UserDetails from './component/UserDetails/UserDetails.jsx'

const userPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobile', Component: Mobile },
      { path: 'laptops', Component: Laptops },
      {
        path: 'users',
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users
      },
      {
        path: 'users2',
        element: <Suspense fallback={<span>Loading...</span>}>
          <User2 userPromise={userPromise}></User2>
        </Suspense>
      },
      {
        path: '/users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      }
    ]
  }
    ,
  {path: '*',
    element: <div>status unavailable: 404 Not Found</div>
  }
    
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}></RouterProvider>
    
  </StrictMode>,
)
