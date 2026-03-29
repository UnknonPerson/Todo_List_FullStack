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
import Tasks from './components/TodoList/Tasks.jsx'
import TaskList from './components/TodoList/TaskList.jsx'
import Catogories from './components/TodoList/Categories.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login />} />
<Route path='todo' element={<Todo />} >
  <Route index element={<TaskList />} />
  <Route path='today' element={<Today />} />
  <Route path='category' element={<Catogories />} />
</Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)