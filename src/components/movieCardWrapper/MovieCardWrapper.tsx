"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { RiArrowDownDoubleLine } from "react-icons/ri";
import MovieCard from '../movieCard/MovieCard';
import dynamic from 'next/dynamic';

const MovieCardWrapper = () => {
    const [movies, setMovies] = useState<any>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    console.log('movies', movies);

    const fetchMovies = async (pageNum: any) => {
        const url = `${process.env.APP_BASE_URL}`
        setLoading(true);
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_APP_BASE_URL}`, {
            params: {
                api_key: process.env.NEXT_PUBLIC_APP_API_KEY,
                page: pageNum,
            },
        });
        console.log('data', data);

        setMovies((prev: any) => [...prev, ...data.results]);
        setHasMore(data.page < data.total_pages);
        setLoading(false);
    };

    useEffect(() => {
        fetchMovies(page);
    }, [page]);
    const loadMore = () => setPage((prev) => prev + 1);
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[10px]">
                {movies?.map((movie: any, index: number) => {
                    return (
                        <MovieCard key={index} movie={movie} />
                    )
                })}
            </div>
            <div className=" flex justify-center items-center my-8">
                <button onClick={loadMore} className='bg-blue-500 text-white px-4 py-2 border-none rounded-lg flex items-center justify-between'><RiArrowDownDoubleLine />Load More</button>
            </div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(MovieCardWrapper), { ssr: false })

