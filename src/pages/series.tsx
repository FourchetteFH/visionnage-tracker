import { useNavigate } from 'react-router-dom'
import AnimatedList from '../components/AnimatedList'

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10']

function Series() {
    const navigate = useNavigate()

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

            <div className="flex flex-col items-center pt-10 px-10">
                <AnimatedList
                    items={items}
                    onItemSelect={(item, index) => console.log(item, index)}
                    showGradients
                    enableArrowNavigation
                    displayScrollbar
                />
            </div>
        </div>
    )
}

export default Series
