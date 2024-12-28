import { display } from "@/fonts";

export default function Section({title, content} : {title: string, content: string[]}) {
    return(
        <div className="w-full flex flex-col gap-y-5">
            <p className={`text-4xl leading-none ${display.className}`}>{title}</p>
            {content.map((text, i) => (
                <div key={i} className="flex flex-row gap-x-8 w-full">
                    <img src={'/right-arrow-md.png'} className="h-5"/>
                    <p className="">{text}</p>
                </div>
            ))}
        </div>
    );
}