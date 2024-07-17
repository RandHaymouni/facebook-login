import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../src/pages/Login.jsx';
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
