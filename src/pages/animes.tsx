{/* Outil React pour stocker les données qui peuvent changer dans le temps */ }
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddAnimeModal from '../components/AddAnimeModal'
{/* Import de l'interface Anime */ }
import type { Anime } from '../types/anime'
import {useEffect } from 'react'

function Animes() {


    const navigate = useNavigate()

    {/* Création d'une variable d'état pour stocker la liste des animés */ }

    {/* localStorage.getItem('animes_list') : va chercher la donnée stockée sous le nom 'animes_list'
        stored ? ... : [] : c'est un ternaire. Si stored existe, on l'utilise, sinon liste vide
        JSON.parse(stored) : le localStorage ne stocke que du texte. JSON.parse transforme ce texte en vrai tableau JavaScript
        Le () => dans le useState est une fonction qui ne s'exécute qu'une seule fois au démarrage, c'est plus efficace que de lire le localStorage à chaque rendu
        */}
    const [animes, setAnimes] = useState<Anime[]>(() => {
        const stored = localStorage.getItem('animes_list')
        return stored ? JSON.parse(stored):[]
    })

    {/* showModal : true = la modale est ouverte, false = elle est fermée */ }
    const [showModal, setShowModal] = useState(false)

    {/* handleAdd : c'est la fonction qu'on passe à la modale.
        Quand elle appelle onAdd(newAnime), c'est cette fonction qui se déclenche.
        prev => [...prev, anime] : prev c'est l'ancienne liste.
        Le ... s'appelle le "spread operator", il garde tous les anciens animés et ajoute le nouveau à la fin.
        On ne modifie jamais directement la liste, on en crée toujours une nouvelle, c'est la règle en React */
    }


    {/* .filter() : comme .map(), c'est une boucle. Mais au lieu de transformer chaque élément, elle garde ou supprime chaque élément selon une condition
        anime.id !== id : "garde cet animé seulement si son id est différent de celui qu'on veut supprimer" */}
    const handleDelete = (id : string) => {
        setAnimes(prev => prev.filter(anime => anime.id !== id))
    }


    {/* useEffect : c'est un outil React qui permet d'exécuter du code en réaction à un changement. Il prend deux paramètres : une fonction à exécuter, et une liste de variables à surveiller
        [animes] : le tableau à la fin s'appelle le tableau de dépendances. Il dit à React "surveille animes, et chaque fois qu'il change, exécute la fonction"
        JSON.stringify : fait l'inverse de JSON.parse. Il transforme ton tableau JavaScript en texte pour pouvoir le stocker dans le localStorage */}
    useEffect(() => {
        localStorage.setItem('animes_list', JSON.stringify(animes))
    }, [animes])

    const handleAdd = (anime: Anime) => {
        setAnimes(prev => [...prev, anime])
    }

    return (
        <div className="min-h-screen bg-purple-950">

            {/* Header */}
            <header className="w-full bg-purple-600 text-white py-4 px-6 shadow-md flex items-center">
                <button
                    onClick={() => navigate('/')}
                    className="text-white bg-purple-800 hover:bg-purple-700 px-4 py-2 rounded-lg cursor-pointer transition-colors"
                >
                    ← Retour
                </button>
                <h1 className="text-3xl font-bold text-center flex-1">Anime</h1>
            </header>

            <div className="flex flex-col items-center pt-8 px-10 gap-4">

                {/* Bouton centré sous le header */}
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-purple-500 hover:bg-purple-400 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 active:scale-95"
                >
                    Ajouter un animé
                </button>

                {/* Si aucun animé n'est trouvé, affiche un message.
                    Le && veut dire : si c'est vrai, affiche ce qui suit */}
                {animes.length === 0 && (
                    <p className="text-purple-300 text-center mt-10 text-lg">
                        Aucun animé pour l'instant... Rajoutes-en un !
                    </p>
                )}

                {/* Boucle .map() qui parcourt tous les animés de la liste
                    et crée une carte HTML pour chacun.
                    Exemple : ['Naruto', 'Sasuke'].map(a => <p>{a}</p>)
                    produit : <p>Naruto</p> <p>Sasuke</p>
                    key={anime.id} : React a besoin d'un identifiant unique sur chaque élément
                    Les {} servent à injecter du JavaScript dans le HTML */}
                {animes.map(anime => (
                    <div key={anime.id} className="w-full max-w-lg bg-purple-900/50 border border-purple-700 rounded-xl px-5 py-4 flex items-center justify-between">
                        <div>
                            <p className="text-white font-semibold text-lg">{anime.name}</p>
                            <p className="text-purple-300 text-sm">Saison {anime.season} — Épisode {anime.episode}</p>
                        </div>

                        {/* Badge vu / à voir */}
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${anime.seen ? 'bg-green-700 text-green-100' : 'bg-yellow-700 text-yellow-100'}`}>
                            {anime.seen ? 'Vu' : 'À voir'}
                        </span>

                        <button onClick={() => handleDelete(anime.id)} className="text-purple-400 hover:text-red-400 transition-colors text-xl">
                            X
                        </button>
                    </div>
                ))}

            </div>

            {/* {showModal && <AddAnimeModal ... />} : si showModal est true, on affiche la modale. Si c'est false, elle disparaît.
                onClose={() => setShowModal(false)} : quand la modale appelle onClose(), on remet showModal à false */}
            {showModal && (
                <AddAnimeModal onAdd={handleAdd} onClose={() => setShowModal(false)} />
            )}

        </div>
    )
}

export default Animes



{/* Memory important : 
    useState → stocke les données en mémoire
    useEffect → réagit aux changements et sauvegarde dans le localStorage
    JSON.stringify / JSON.parse → convertit entre tableau JavaScript et texte
    */}