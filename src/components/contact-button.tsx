import Image from "next/image";

export default function ContactButton({method, text, destination} : {method: string, text: string, destination: string}) {
    const id = method.replace(/(\W|_)/g, '-')
    
    return(
        <a href={destination} className="size-fit max-w-full max-h-full flex flex-row sm:flex-col place-items-center gap-y-4 gap-x-2 group">
            <div className="h-6 sm:h-9 md:h-11 aspect-[4/3] flex">
                <Image alt={`${method} icon`} className="object-contain object-bottom max-w-full max-h-full mx-auto group-hover:motion-safe:animate-bounce" src={`/contact/${id}.png`}/>
            </div>
            <p className="font-medium text-sm text-center w-full">{text}</p>
        </a>
    );
}