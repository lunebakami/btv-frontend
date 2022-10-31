import { Suspense } from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'

function App() {
  const query = useLazyLoadQuery(
    graphql`
      query AppQuery {
        ...MainPage_query
      }
    `,
    {}
  )

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage query={query} />,
    },
  ])

  return (
    <div className="App">
      <Suspense fallback={<h2>Loading...</h2>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  )
}

export default App
