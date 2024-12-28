"use client";

import { display } from "@/fonts";
import DefaultButton from "@/components/default-button";
import Section from "@/components/section";
import { DESCRIPTION, OBSESSIONS, RESUME_URL, EXPERIENCE, OTHER, Experience as ExperienceInterface } from "@/content/about";
import Experience from "@/components/experience";
import { useState } from "react";

export default function About() {
    const experienceSorted = EXPERIENCE.sort((a,b) => (b.start.year*12 + b.start.month) - (a.start.year*12 + a.start.month));
    let current : ExperienceInterface[] = [], past : ExperienceInterface[] = [];
    experienceSorted.map((exp) => { exp.end ? past.push(exp) : current.push(exp) })

    const [name, setName] = useState('anh');

    return(
        <div className="w-screen grow flex flex-col md:flex-row px-6">
            {/* left column */}
            <div className="md:fixed md:h-full max-h-screen md:w-60 lg:w-96 flex flex-col px-2 md:px-6 lg:px-8 py-8 sm:py-10 gap-y-8 sm:gap-y-10 items-center">
                <img src={'/star.png'} className="w-24 sm:w-24 md:w-28 lg:w-36"/>
                <button onClick={() => {name == 'anh' ? setName('tuong anh') : setName('anh')}} className={`${display.className} text-4xl`}>hey, i'm {name}</button>
                <p className="text-center md:w-fit text-sm lg:text-base">{DESCRIPTION}</p>
                <div className="flex flex-col px-2 gap-y-4 w-full">
                    <div className="flex flex-row gap-x-4 w-full h-fit">
                        <img src={'/block-i.png'} className="h-5 md:max-md:h-4"/>
                        <p className={`text-lg md:max-md:text-base leading-none ${display.className}`}>computer science @ university of illinois urbana-champaign</p>
                    </div>
                    <div className="flex flex-row gap-x-4 w-full h-fit">
                        <img src={'/heart.png'} className="h-5 md:max-md:h-4"/>
                        <p className={`text-lg md:max-md:text-base leading-none ${display.className}`}>my current obsessions: {
                            OBSESSIONS.map(([item, link], i) => 
                                <span key={i}>
                                    <a href={link} className="hover:underline underline-offset-2">{item}</a>
                                    {i == OBSESSIONS.length - 1 ? '' : ', '}
                                </span>)
                        }</p>
                    </div>
                </div>
                <DefaultButton href={RESUME_URL} text="resume" fill={true}/>
            </div>

            {/* right column */}
            <div className="grow flex flex-col px-2 md:pl-16 md:pr-6 py-10 gap-y-10 md:ml-60 lg:ml-96">
                {/* experience */}
                <div className="w-full flex flex-col gap-y-5">
                    <a href={RESUME_URL} className={`text-3xl sm:text-4xl leading-none ${display.className}`}>experience</a>
                    {current.map(({company, role, start, end, desc, link}, i) => (
                        <Experience company={company} role={role} start={start} end={end} desc={desc} link={link} key={i}/>
                    ))}
                    {past.map(({company, role, start, end, desc, link}, i) => (
                        <Experience company={company} role={role} start={start} end={end} desc={desc} link={link} key={i}/>
                    ))}
                </div>

                {/* other activities */}
                <div className="w-full flex flex-col gap-y-4 lg:gap-y-5">
                    <p className={`text-3xl sm:text-4xl leading-none ${display.className}`}>other stuff i'm up to</p>
                    {OTHER.map(({title, text, link}, i) => (
                        <div key={i} className="flex flex-row gap-x-8 w-full">
                            <img src={'/right-arrow-md.png'} className="h-5"/>
                            {link ? 
                                <a href={link} className="text-sm lg:text-base"><span className="font-medium block">{title}</span>{text}</a> 
                            : 
                                <p className="text-sm lg:text-base"><span className="font-medium block">{title}</span>{text}</p> 
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}