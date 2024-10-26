import Link from 'next/link'
import React from 'react'

const RecommendationCard = ({ movie }: any) => {
    return (
        <Link href={`/movie/${movie?.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3 className='my-2 text-[18px] px-2'>{movie.title}</h3>
        </Link>
    )
}

export default RecommendationCard