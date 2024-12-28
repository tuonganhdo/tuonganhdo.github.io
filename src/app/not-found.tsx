import { display } from "@/fonts"

export default function NotFound() {
    return(
        <div className={`w-screen h-screen bg-blue-700 text-white flex justify-center place-items-center px-10 sm:px-20 md:px-40 ${display.className}`}>
            <div className="w-fit flex flex-col">
                <p className="text-9xl -ml-4 -mt-2 mb-5">:(</p>
                <p className="text-2xl mb-10">uh oh. looks like there&apos;s nothing here. let&apos;s get you elsewhere.</p>
                <div className="flex flex-row gap-12 text-lg md:text-xl text-white/60">
                    <a href="/" className="hover:text-white/100 hover:underline underline-offset-4">return home</a>
                    <a href="/contact" className="hover:text-white/100 hover:underline underline-offset-4">get in touch</a>
                    <a href="https://random.earth" className="hidden sm:block hover:text-white/100 hover:underline underline-offset-4">surprise me</a>
                </div>
            </div>
        </div>
    )
}