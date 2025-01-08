"use client";

import { display } from "@/fonts";
import { HIGHLIGHTS } from '@/content/highlights'
import Highlight from "@/components/highlight";

export default function Highlights() {
    const gridPositions = [
        "row-start-1 col-start-2 sm:row-start-1 sm:col-start-3 lg:col-start-4"
        , "row-start-5 col-start-3 sm:row-start-2 sm:col-start-1 lg:col-start-1"
        , "row-start-2 col-start-1 sm:row-start-2 sm:col-start-5 lg:col-start-6"
        , "row-start-2 col-start-4 sm:row-start-3 sm:col-start-6 lg:col-start-8"
        , "row-start-4 col-start-2 sm:row-start-4 sm:col-start-2 lg:col-start-3"
        , "row-start-4 col-start-4 sm:row-start-5 sm:col-start-1 lg:col-start-1"
        , "row-start-5 col-start-1 sm:row-start-5 sm:col-start-4 lg:col-start-6"
    ]

    return(
        <div className="w-full grow grid place-items-center place-content-center grid-rows-5 grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 px-6 sm:pb-10">
            {HIGHLIGHTS.map(({name, desc, url}, i) => (
                <div key={i} className={gridPositions[i]}>
                    <Highlight name={name} desc={desc} url={url}/>
                </div>
            ))}
            <p className={`leading-none text-xl sm:text-2xl lg:text-4xl text-center row-start-3 col-start-2 sm:col-start-3 lg:col-start-3 col-span-2 lg:col-span-4 ${display.className}`}>builder of sorts and <br className="hidden md:block"/>designer sometimes</p>
        </div>
    );
}