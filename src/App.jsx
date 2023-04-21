import './App.css'
import Quiz from './Quiz'
import Start from './Start'
import { createBrowserRouter } from 'react-router-dom'
import Result from './Result'


const Router = createBrowserRouter([
  {
    path : '/',
    element : <Start />
  },
  {
    path:'/quiz',
    element: <Quiz />
  },
  {
    path:'/result',
    element:<Result />
  },
])

export default Router
