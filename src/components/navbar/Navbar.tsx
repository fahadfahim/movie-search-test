'use client';
import React, { useState } from 'react'
import DarkModeSwitch from '../darkModeSwitch/DarkModeSwitch'
import { SiThemoviedatabase } from "react-icons/si";
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
const Navbar = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const handleSubmit = () => {
        router.push(`/search/${search}`);
    };
    return (
        <div className=' sticky top-0 z-10 flex items-center justify-between px-1 lg:px-[200px] py-2 dark:bg-gray-600 bg-amber-100 mb-4'>
            <SiThemoviedatabase size={40} onClick={() => router.push('/')} className=' cursor-pointer' />
            <div className='search-box'>
                <input type='search' placeholder='Search Movie' className='p-2 dark:bg-[#697885] bg-white rounded-l-lg border-none outline-none' onChange={(e) => setSearch(e.target.value)} />
                <button className=' dark:bg-green-300 bg-yellow-200 p-2 rounded-r-lg' onClick={handleSubmit}>Search</button>
            </div>
            <DarkModeSwitch />
        </div>
    )
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })