import React from 'react';

function MoviesByGenre() {
    const genreList = [
        { id: 1, text: 'Action' },
        { id: 2, text: 'Comedy' },
        { id: 3, text: 'Drama' },
        { id: 4, text: 'Horror' },
        { id: 5, text: 'Sci-Fi' },
    ];

    return (
        <div className="p-5 md:px-16">
            {/* Add heading aligned to the left */}
            <h2 className="text-white text-lg md:text-xl mb-4">Search by Genre</h2>

            <div className="flex gap-2 md:gap-5 p-2">
                {genreList.map((genre) => (
                    <div
                        key={genre.id}
                        className="border-[2px] border-gray-600 rounded-lg hover:scale-105 
                        hover:bg-gray-800 transition-all duration-300 ease-in-out cursor-pointer 
                        flex items-center justify-center h-[50px] md:h-[60px] 
                        flex-[1_1_0%]"
                    >
                        <p className="text-white  text-sm md:text-base text-center">{genre.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MoviesByGenre;
