import React from 'react'
import MovieCast from '../movieCast/MovieCast';

const MovieDetails = ({ movie, cast }: any) => {
    console.log('movie', movie);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] h-fit '>
            <div className="movie-banner-box w-full h-[630px]">
                <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} className=' w-full h-full' />
            </div>
            <div className='border p-2 rounded-lg'>
                <h1 className='text-[28px] font-bold text-[#121212]'>{movie?.title}</h1>
                <div className=' flex justify-between items-center mb-4'>
                    <p className=' text-sm'>{movie?.tagline}</p>
                    <p className='text-sm font-bold'>Release On : {movie?.release_date}</p>
                </div>
                <p className='text-[16px]'>{movie?.overview}</p>
                <div className='flex text-sm font-bold text-[#121212]'>Geners :{movie?.genres?.map((gener: any) => <p className='text-sm font-bold text-[#121212]' key={gener?.id}> {gener?.name} {', '}</p>)}</div>
                <p className='text-[18px] text-[#121212] font-bold my-2'>Cast : </p>
                <MovieCast actors={cast} />
            </div>
        </div>
    )
}

export default MovieDetails