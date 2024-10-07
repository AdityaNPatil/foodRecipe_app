import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Favorites from './pages/Favorites.jsx'
import Home from './pages/Home.jsx'

// context
import RecipeProvider from './context/context.jsx'

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/favorites",
        element: <Favorites />
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Context Provider wrapping */}
    <RecipeProvider>
      {/* Router wrapping */}
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </RecipeProvider>
  </StrictMode>
)
