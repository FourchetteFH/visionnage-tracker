import { useState } from 'react'
import type { Film } from '../types/film'

interface AddFilmModalProps {
    onAdd: (film: Film) => void
    onClose: () => void
}

function AddFilmModal({ onAdd, onClose }: AddFilmModalProps) {

    const [name, setName] = useState('')
    const [seen, setSeen] = useState(false)

    const handleSubmit = () => {
        if (!name.trim()) return

        const newFilm: Film = {
            id: crypto.randomUUID(),
            name: name.trim(),
            seen: seen
        }

        onAdd(newFilm)
        onClose()
    }

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-purple-950 border border-purple-500 rounded-2xl p-8 w-full max-w-md flex flex-col gap-5">

                <h2 className="text-2xl font-bold text-white text-center">Ajouter un film</h2>

                <div className="flex flex-col gap-1">
                    <label className="text-purple-300 text-sm">Nom du film</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-purple-900 border border-purple-600 text-white placeholder-purple-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-400"
                    />
                </div>

                <label className="flex items-center gap-3 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={seen}
                        onChange={(e) => setSeen(e.target.checked)}
                        className="w-4 h-4 accent-purple-500"
                    />
                    <span className="text-purple-200">Déjà vu</span>
                </label>

                <div className="flex gap-3 mt-2">
                    <button
                        onClick={onClose}
                        className="flex-1 bg-purple-800 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors"
                    >
                        Annuler
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="flex-1 bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 rounded-lg transition-colors"
                    >
                        Valider
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AddFilmModal