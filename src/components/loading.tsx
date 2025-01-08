"use client";

import { display } from "@/fonts"

export default function Loading() {
    return(
        <div className="w-screen h-screen fixed left-0 top-0 bg-white flex flex-col place-items-center justify-center gap-y-6 lg:gap-y-8">
            <Image alt="animation of star filling" src="/star-fill.gif" className="size-16 md:size-24 lg:size-32"/>
            <p className={`${display.className} text-2xl md:text-3xl lg:text-4xl text-center text-black`}>Getting things set up...</p>
        </div>
    )
}