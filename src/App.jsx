import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import viteLogo from '/vite.svg'
import Layout from './component/Layout'
import Dashboard from './component/Dashboard'
import Posts from './component/Posts'



function App() {

  const routes = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "posts", element: <Posts /> },
      
        
      ]
    }
  ])

  return (
    <div className="background">
      <RouterProvider router={routes} />
    </div>
  )
}

export default App