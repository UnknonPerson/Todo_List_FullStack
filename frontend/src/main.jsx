import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Signup from './Auth/Signup.jsx'
import Login from './Auth/Login.jsx'
import Completed from './components/TodoList/CompletedTask.jsx'
import Todo from './page/Todo/Todo.jsx'
import Home from './components/Home/Home.jsx'
import Today from './components/TodoList/Today.jsx'
import Tasks from './components/TodoList/Tasks.jsx'
import TaskList from './components/TodoList/TaskList.jsx'
import Catogories from './components/TodoList/Categories.jsx'
import Profile from './page/Profile/Profile.jsx'
import UserContextProvider from './Context/UserContextProvider.jsx'
import About from './page/About/About.jsx'
import TaskContextProvidee from './Context/TaskContextProvidee.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login />} />
      <Route path='profile' element={<Profile />} />
      <Route path='about' element={<About />} />
<Route path='todo' element={<Todo />} >
  <Route index element={<TaskList />} />
  <Route path='today' element={<Today />} />
  <Route path='tasks' element={<Tasks />} />
  <Route path='completed' element={<Completed />} />
  <Route path='categories' element={<Catogories />} />
  <Route path='*' element={<div className='text-center text-2xl font-bold mt-20'>404 - Page Not Found</div>} />
</Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskContextProvidee>
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
    </TaskContextProvidee>
  </StrictMode>,
)