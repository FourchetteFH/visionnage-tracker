import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Series } from '../types/series'
import AddSerieModal from '../components/AddSeriesModal'

function SeriesPage() {
    const navigate = useNavigate()

    const [series, setSeries] = useState<Series[]>(() => {
        const stored = localStorage.getItem('series_list')
        return stored ? JSON.parse(stored) : []
    })

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        localStorage.setItem('series_list', JSON.stringify(series))
    }, [series])

    const handleAdd = (serie: Series) => {
        setSeries(prev => [...prev, serie])
    }

    const handleDelete = (id: string) => {
        setSeries(prev => prev.filter(s => s.id !== id))
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
                <h1 className="text-3xl font-bold text-center flex-1">Séries</h1>
            </header>

            <div className="flex flex-col items-center pt-8 px-10 gap-4">
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-purple-500 hover:bg-purple-400 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 active:scale-95"
                >
                    + Ajouter une série
                </button>

                {series.length === 0 && (
                    <p className="text-purple-300 text-center mt-10 text-lg">
                        Aucune série pour l'instant... Rajoutes-en une !
                    </p>
                )}

                {series.map(serie => (
                    <div key={serie.id} className="w-full max-w-lg bg-purple-900/50 border border-purple-700 rounded-xl px-5 py-4 flex items-center justify-between">
                        <div>
                            <p className="text-white font-semibold text-lg">{serie.name}</p>
                            <p className="text-purple-300 text-sm">Saison {serie.season} — Épisode {serie.episode}</p>
                        </div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${serie.seen ? 'bg-green-700 text-green-100' : 'bg-yellow-700 text-yellow-100'}`}>
                            {serie.seen ? 'Vu' : 'À voir'}
                        </span>
                        <button onClick={() => handleDelete(serie.id)} className="text-purple-400 hover:text-red-400 transition-colors text-xl">
                            ✕
                        </button>
                    </div>
                ))}
            </div>
            {showModal && (
                <AddSerieModal
                    onAdd={handleAdd}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    )
}

export default SeriesPage