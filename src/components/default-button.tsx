import { display } from "@/fonts";

export default function DefaultButton({href, text, fill} : {href : string, text : string, fill : boolean}) {
    return(
        <a href={href} className={`relative text-lg leading-none flex flex-row justify-center gap-x-2 ${fill ? 'w-full' : 'px-4 min-w-24'} py-1 border-2 border-black rounded-md hover:bg-black hover:text-white group ${display.className}`}>
            <img src='/sparkles.png' className="h-5 inline group-hover:invert"/>
            {text}
        </a>
    );
}