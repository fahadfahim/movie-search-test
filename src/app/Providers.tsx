'use client';

import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';

function Providers({ children }: any) {
    return (
        <ThemeProvider defaultTheme='system' attribute='class'>
            <div className='text-gray-700 dark:text-gray-200 dark:bg-black min-h-screen select-none transition-colors duration-300'>
                {children}
            </div>
        </ThemeProvider>
    );
}
export default dynamic(() => Promise.resolve(Providers), { ssr: false })

