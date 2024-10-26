'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link'
import React from 'react'
import { FaThumbsUp } from "react-icons/fa";

const MovieCard = ({ movie }: any) => {
  return (
    <Link
      href={`/movie/${movie?.id}`}
      className="border rounded-lg relative cursor-pointer group overflow-hidden transition transform duration-300"
    >
      <div className=""> {/* Add overflow-hidden here */}
        <div className="overflow-hidden">

          <div className="img-box hover:scale-105 transition-transform duration-300">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
              alt={movie?.title}
              className=""
            />
          </div>
          <div className=' p-2'>
            <h1
              className="dark:text-white text-[#2e2c2c] text-[18px] font-semibold overflow-hidden text-ellipsis line-clamp-1 "
            >
              {movie?.title}
            </h1>
            <div className='flex items-center justify-between'>
              <p className='dark:text-white text-[#2e2c2c]'> Release on : {movie?.release_date}</p>
              <div className='flex items-center'><FaThumbsUp className='mr-1' color='#324ea8' />{movie?.vote_count}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>

  )
}
export default dynamic(() => Promise.resolve(MovieCard), { ssr: false })

