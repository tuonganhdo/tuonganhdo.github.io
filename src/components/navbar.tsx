'use client';

import { useState } from 'react'
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import { display } from '@/fonts'

export default function Navbar() {
    const pathname = usePathname();
    const [openNavigation, setOpenNavigation] = useState(false);
    
    if (pathname == '/') {
        return <div className="w-screen h-0"/>;
    }

    return(
        <div className={`w-screen h-fit bg-white z-50 sticky top-0 left-0 justify-between items-center px-7 sm:px-10 pt-4 sm:pt-6 pb-2 sm:pb-4 text-lg text-center flex flex-row ${display.className}`}>
            <a href='/highlights'>anh do</a>
            <div className="hidden sm:visible sm:flex flex-row justify-end gap-x-4 items-center underline-offset-4">
                <a href='/highlights' className={pathname == '/highlights' ? 'underline' : 'hover:underline'}>highlights</a>
                <p>/</p>
                <a href='/about' className={pathname == '/about' ? 'underline' : 'hover:underline'}>about</a>
                <p>/</p>
                <a href='/contact' className={pathname == '/contact' ? 'underline' : 'hover:underline'}>contact</a>
            </div>
            <button onClick={() => {setOpenNavigation(true)}} className={`sm:hidden -tracking-[0.15em] rotate-90 ${display.className}`}>|||</button>
            {openNavigation && 
                <div className={`sm:hidden w-screen h-screen fixed top-0 right-0 flex flex-col gap-y-4 px-6 justify-center text-center place-items-end text-4xl ${display.className} bg-white`}>
                        <button onClick={() => {setOpenNavigation(false)}} className="sm:hidden absolute top-5"><img alt="x" src={'/x.png'} className="size-5"/></button>
                        <a href='/highlights' className={pathname == '/highlights' ? 'underline' : 'hover:underline'}>highlights</a>
                        <a href='/about' className={pathname == '/about' ? 'underline' : 'hover:underline'}>about</a>
                        <a href='/contact' className={pathname == '/contact' ? 'underline' : 'hover:underline'}>contact</a>
                </div>
            }
        </div>
    );
}