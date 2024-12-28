export default function Highlight({name, desc} : {name : string, desc : string}) {
    const id = name.replace(/(\W|_)/g, '-')
    
    return(
        <a href={`/projects/${id}`} className="relative size-fit max-w-full max-h-full flex flex-col place-items-center gap-y-4 group">
            <div className="h-12 md:h-14 aspect-[4/3] flex">
                <img className="object-contain object-bottom max-w-full max-h-full mx-auto" src={`/highlights/${id}.png`}/>
            </div>
            <p className="font-medium text-xs md:text-sm text-center w-full">{name}</p>
            <div className="w-full h-full absolute top-0 left-0 place-items-center bg-white/90 hidden group-hover:flex">
                <p className="w-[200%] text-center text-sm -mx-7">{desc}</p>
            </div>
        </a>
    );
}