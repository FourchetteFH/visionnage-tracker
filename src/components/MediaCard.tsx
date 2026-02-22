interface MediaCardProps {
    title: string;
    onClick?: () => void;
}

function MediaCard({ title, onClick }: MediaCardProps) {

    return (
        <button onClick={onClick} className="flex-1 bg-gradient-to-br from-violet-500 to-indigo-700 rounded-2xl shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
        </button>
    );
}

export default MediaCard;
