import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const prenoms = [
    'Alice', 'Baptiste', 'Cylian', 'Dylan', 'Emma',
    'François', 'Gabriel', 'Hugo', 'Inès', 'Jules',
    'Kevin', 'Lucas', 'Maël', 'Nathan', 'Océane',
    'Pierre', 'Quentin', 'Robache', 'Sarah', 'Thomas',
    'Ugolin', 'Valentin', 'William', 'Xavier', 'Yasmine', 'Zoé'
]

function Freestyle() {
    const navigate = useNavigate();
    const [compteur, setCompteur] = useState(0);
    const [prenom, setPrenom] = useState('');
    const [nom_utilisateur, setNomUtilisateur] = useState('');

    const prenomAleatoire = () => {
        const index = Math.floor(Math.random() * prenoms.length);
        setPrenom(prenoms[index]);
    }

    return (
        <div className="min-h-screen bg-purple-950 flex flex-col items-center pt-10 gap-10 px-6">

            <button
                onClick={() => navigate('/')}
                className="self-start text-white bg-purple-800 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
            >
                ← Retour
            </button>

            <h1 className="text-3xl font-bold text-white">Freestyleeeee</h1>

            {/* Compteur */}
            <div className="p-8 flex items-center gap-4 ">
                <h2 className="text-white text-xl ">Compteur</h2>
                <p className="text-5xl text-white">{compteur}</p>
                <div className="flex gap-4">
                    <button
                        onClick={() => setCompteur(compteur - 1)}
                        className="bg-purple-700 hover:bg-purple-600 text-white text-2xl font-bold px-6 py-2 rounded-xl transition-colors"
                    >
                        −
                    </button>
                    <button
                        onClick={() => setCompteur(compteur + 1)}
                        className="bg-purple-500 hover:bg-purple-400 text-white text-2xl font-bold px-6 py-2 rounded-xl transition-colors"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Générateur de prénom */}
            <div className="bg-purple-900/50 border border-purple-700 rounded-2xl p-8 flex flex-col items-center gap-4 w-full max-w-sm">
                <h2 className="text-white text-xl">Prénom aléatoire</h2>
                {prenom == '' ? (
                    <p className="text-purple-300">Clique sur le bouton !</p>
                ) : (
                    <p className="text-xl text-white">{prenom}</p>
                )}
                <button
                    onClick={prenomAleatoire}
                    className="text-white"
                >
                    Générer un prénom
                </button>
                <br />
                <br />
                <div className=" flex flex-col items-center ">
                    <h2 className="text-white text-xl">Quel est ton prénom ?</h2>
                    <br />
                    <input
                        type="text"
                        onChange={(e) => setNomUtilisateur(e.target.value)}
                        className="bg-purple-900 px-4 py-2 text-white"
                    />
                    <br />
                    {nom_utilisateur === '' ? (
                        <p className="text-purple-300">Tape ton prénom !</p>
                        
                    ) : (
                        <p className="text-xl text-white">Salut {nom_utilisateur} !</p>
                    )}
                </div>

            </div>

        </div>
    )
}

export default Freestyle