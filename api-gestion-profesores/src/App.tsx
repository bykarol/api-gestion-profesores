import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import ProfesorPage from './pages/ProfesorPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/profesor/:id" element={<ProfesorPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
