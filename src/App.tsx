import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Films from './pages/films'
import SeriesPage from './pages/series'
import Animes from './pages/animes'
import Freestyle from './pages/bacASable'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/animes" element={<Animes />} />
        <Route path="/bacASable" element={<Freestyle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App