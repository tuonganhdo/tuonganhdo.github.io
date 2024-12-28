import { display } from "@/fonts";
import { useState } from "react";

export default function Loading() {
    const [progress, setProgress] = useState([]);

    // for (let i = 0; i < 10; i++) {
    //     setTimeout(() => {setProgress(progress.push)})
    // }

    return(
        <div className="flex flex-col mx-auto justify-center items-center gap-y-3">
            <div className="w-full h-fit grid grid-cols-10 grid-rows-1 gap-x-1 p-1 border-4 border-black">
                <div className="w-5 h-6 bg-black"></div>
                <div className="w-5 h-6 bg-black"></div>
                <div className="w-5 h-6 bg-black"></div>
                <div className="w-5 h-6 bg-black"></div>
                <div className="w-5 h-6 bg-black"></div>
                <div className="w-5 h-6 bg-black"></div>
            </div>
            <h1 className={`text-3xl ${display.className}`}>loading...</h1>
        </div>
    );
}