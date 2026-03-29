import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Layout from './Layout.jsx'
import Signup from './Auth/Signup.jsx'
import Login from './Auth/Login.jsx'

import Todo from './page/Todo/Todo.jsx'
import Home from './components/Home/Home.jsx'
import Today from './components/TodoList/Today.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login />} />
      <Route path='todo' element={<Todo />} >
        <Route path='today' element={<Today />} />
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)