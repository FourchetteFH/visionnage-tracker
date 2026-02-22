import { useNavigate } from 'react-router-dom'
import AnimatedContent from '../javascript/carre_anime.tsx'
import MediaCard from '../components/MediaCard'
import SearchBar from '../components/SearchBar.tsx'

function Home() {
    const navigate = useNavigate()

    return (
        <>
            <header className="w-full bg-purple-600 text-white py-4 px-6 shadow-md">
                <h1 className="text-3xl font-bold text-center">Projet de Stage</h1>
            </header>

            <div className="min-h-screen bg-purple-950 flex flex-col items-center pt-10 px-10">
                <div className="flex gap-6 w-full max-w-5xl h-[120px]">

                    <MediaCard title="Films" onClick={() => navigate('/films')} />
                    <MediaCard title="Séries" onClick={() => navigate('/series')} />
                    <MediaCard title="Anime" onClick={() => navigate('/animes')} />
                </div>

                <p className="text-white/70 text-lg mt-8 text-center max-w-2xl">
                    Ici sont répertoriés tous tes films, séries ou animés, que tu as vu... ou pas encore !
                </p>

                <br/>
                <br/>
                <SearchBar placeholder="Rechercher des visionnages" />
            </div>

            <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
            >
                <div>Content to Animate</div>
            </AnimatedContent>

        </>
    )
}

export default Home
