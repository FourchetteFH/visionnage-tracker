import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Films from './pages/films'
import Series from './pages/series'
import Animes from './pages/animes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/series" element={<Series />} />
        <Route path="/animes" element={<Animes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App