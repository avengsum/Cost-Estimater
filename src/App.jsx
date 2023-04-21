import './App.css'
import Quiz from './Quiz'
import Start from './Start'
import { createBrowserRouter } from 'react-router-dom'


const Router = createBrowserRouter([
  {
    path : '/',
    element : <Start />
  },
  {
    path:'/quiz',
    element: <Quiz />
  }
])

export default Router
