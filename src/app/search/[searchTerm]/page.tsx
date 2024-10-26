import React from 'react'
import MovieCard from '@/components/movieCard/MovieCard';
interface SearchPageProps {
    params: { searchTerm: string };
}
export default async function SearchPage({ params }: SearchPageProps) {
    const { searchTerm } = params;

    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=f286f0a76d6a0224fe8ae1304a2ef04b&query=${searchTerm || ''}&language=en-US&page=1&include_adult=false`
    );
    const data = await res.json();
    const results = data.results;
    return (
        <div>
            <h1 className=' dark:text-white text-[#121212] text-center my-3'>Search Results for: {searchTerm}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[10px]">
                {results.map((result: any, index: any) => <MovieCard key={index} movie={result} />)}
            </div>
        </div>
    )
}

