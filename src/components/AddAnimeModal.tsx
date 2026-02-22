import { useState } from 'react'
import type { Anime } from '../types/anime'

// Les "paramètres" que la modale attend de son parent.
// onAdd : une fonction pour transmettre l'animé créé
// onClose : une fonction pour se fermer
interface AddAnimeModalProposition {
    onAdd: (anime: Anime) => void
    onClose: () => void
}

function AddAnimeModal({ onAdd, onClose }: AddAnimeModalProposition) {

    // Chaque useState stocke la valeur d'un champ du formulaire.
    // Quand tu tapes dans un input, onChange met à jour la variable en temps réel
    const [name, setName] = useState('')
    const [seen, setSeen] = useState(false)
    const [season, setSeason] = useState(1)
    const [episode, setEpisode] = useState(1)

    // handleSubmit se déclenche quand on clique sur "Valider"
    // if (!name.trim()) return : si le nom est vide, on ne fait rien
    // crypto.randomUUID() : génère un identifiant unique pour chaque animé
    // onAdd(newAnime) : on envoie l'animé au composant parent (animes.tsx)
    // onClose() : on ferme la modale juste après
    const handleSubmit = () => {
        if (!name.trim()) return

        const newAnime: Anime = {
            id: crypto.randomUUID(),
            name: name.trim(),
            seen: seen,
            season: season,
            episode: episode
        }

        onAdd(newAnime)
        onClose()
    }

    return (
        // fixed inset-0 : couvre tout l'écran
        // bg-black/60 : fond sombre semi-transparent derrière la modale
        // z-50 : place la modale au dessus de tout le reste visuellement
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-purple-950 border border-purple-500 rounded-2xl p-8 w-full max-w-md flex flex-col gap-5">

                <h2 className="text-2xl font-bold text-white text-center">Ajouter un animé</h2>

                <div className="flex flex-col gap-1">
                    <label className="text-purple-300 text-sm">Nom de l'animé</label>
                    {/* e.target.value : la valeur actuelle de l'input au moment où tu tapes */}
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-purple-900 border border-purple-600 text-white placeholder-purple-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-400"
                    />
                </div>

                {/* flex gap-4 : saison et épisode sont côte à côte sur la même ligne */}
                <div className="flex gap-4">
                    <div className="flex flex-col gap-1 flex-1">
                        <label className="text-purple-300 text-sm">Saison</label>
                        <input
                            type="number"
                            min={1}
                            value={season}
                            onChange={(e) => setSeason(Number(e.target.value))}
                            className="bg-purple-900 border border-purple-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-purple-400"
                        />
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                        <label className="text-purple-300 text-sm">Épisode</label>
                        <input
                            type="number"
                            min={1}
                            value={episode}
                            onChange={(e) => setEpisode(Number(e.target.value))}
                            className="bg-purple-900 border border-purple-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-purple-400"
                        />
                    </div>
                </div>

                {/* accent-purple-500 : colorie la checkbox en violet */}
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

export default AddAnimeModal