import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainPage from '../src/pages/MainPage.tsx'
import LoginPage from '../src/pages/LoginPage.tsx'

const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element = {<App />} >
  <Route index  element = {<MainPage />} />
  <Route path='/login' element = {<LoginPage />} >
  </Route>

  </Route>
)
);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

export default App;