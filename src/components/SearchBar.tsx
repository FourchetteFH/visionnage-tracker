

interface SearchBarProposition {
    placeholder?: string;
}

function SearchBarProposition({ placeholder = "Rechercher..." }: SearchBarProposition) {
    return (
        <div className="relative w-full max-w-md">

            {/* Champ de saisie */}
            <input
                type="text"
                placeholder={placeholder}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-800 border border-dark-600 text-white placeholder-dark-400 "
            />
        </div>
    );
}

export default SearchBarProposition;
