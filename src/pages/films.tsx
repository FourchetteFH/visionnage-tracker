import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Film } from '../types/film'
import AddFilmModal from '../components/AddFilmModal'

function Films() {
    const navigate = useNavigate()

    const [films, setFilms] = useState<Film[]>(() => {
        const stored = localStorage.getItem('films_list')
        return stored ? JSON.parse(stored) : []
    })

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        localStorage.setItem('films_list', JSON.stringify(films))
    }, [films])

    const handleAdd = (film: Film) => {
        setFilms(prev => [...prev, film])
    }

    const handleDelete = (id: string) => {
        setFilms(prev => prev.filter(f => f.id !== id))
    }

    return (
        <div className="min-h-screen bg-purple-950">
            <header className="w-full bg-purple-600 text-white py-4 px-6 shadow-md flex items-center">
                <button
                    onClick={() => navigate('/')}
                    className="text-white bg-purple-800 hover:bg-purple-700 px-4 py-2 rounded-lg cursor-pointer transition-colors"
                >
                    ← Retour
                </button>
                <h1 className="text-3xl font-bold text-center flex-1">Films</h1>
            </header>

            <div className="flex flex-col items-center pt-8 px-10 gap-4">
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-purple-500 hover:bg-purple-400 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 active:scale-95"
                >
                    + Ajouter un film
                </button>

                {films.length === 0 && (
                    <p className="text-purple-300 text-center mt-10 text-lg">
                        Aucun film pour l'instant... Rajoutes-en un !
                    </p>
                )}

                {films.map(film => (
                    <div key={film.id} className="w-full max-w-lg bg-purple-900/50 border border-purple-700 rounded-xl px-5 py-4 flex items-center justify-between">
                        <p className="text-white font-semibold text-lg">{film.name}</p>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${film.seen ? 'bg-green-700 text-green-100' : 'bg-yellow-700 text-yellow-100'}`}>
                            {film.seen ? 'Vu' : 'À voir'}
                        </span>
                        <button onClick={() => handleDelete(film.id)} className="text-purple-400 hover:text-red-400 transition-colors text-xl">
                            ✕
                        </button>
                    </div>
                ))}
            </div>

            {showModal && (
                <AddFilmModal
                    onAdd={handleAdd}
                    onClose={() => setShowModal(false)}
                />
            )}

        </div>
    )
}

export default Films