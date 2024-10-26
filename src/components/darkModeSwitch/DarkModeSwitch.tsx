'use client';

import { MdLightMode, MdDarkMode } from 'react-icons/md';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme : theme;
    useEffect(() => setMounted(true), []);
    return (
        <div>
            {mounted &&
                (currentTheme === 'dark' ? (
                    <button onClick={() => setTheme('light')} className='flex hover:text-amber-500  items-center'>
                        <MdLightMode

                            className='text-xl cursor-pointer '
                        />
                        <p className='ml-2 '>Light</p>
                    </button>

                ) : (
                    <button onClick={() => setTheme('dark')} className='flex hover:text-amber-500 items-center'>
                        <MdDarkMode
                            className='text-xl cursor-pointer '
                        />
                        <p className='ml-2 '>Dark</p>
                    </button>

                ))}
        </div>
    );
}
