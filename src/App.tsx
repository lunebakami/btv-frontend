import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
