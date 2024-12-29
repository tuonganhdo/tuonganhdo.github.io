import Image from "next/image";
import ContactButton from "@/components/contact-button";
import { display } from "@/fonts";

export default function Contact() {
    return(
        <div className={`grow w-screen flex flex-col sm:flex-row gap-x-10 gap-y-6 justify-center place-items-center ${display.className}`}>
            {/* <div className="w-fit flex flex-col gap-y-8">
                <p className={`text-3xl sm:text-4xl text-center ${display.className}`}>let&apos;s get in touch!</p>
                <div className="flex flex-col sm:grid sm:grid-cols-3 gap-y-5 gap-x-1 md:gap-x-3 place-items-start sm:place-items-center">
                    <ContactButton method="email" text="anhtgdo@gmail.com" destination="mailto:anhtgdo@gmail.com"/>
                    <ContactButton method="linkedin" text="Anh Do" destination="https://linkedin.com/in/anhdotg"/>
                    <ContactButton method="github" text="tuonganhdo" destination="https://github.com/tuonganhdo"/>
                </div>
            </div> */}
            <Image alt="a mailbox" src='/mailbox.png' className="size-[5.5rem]"/>
            <div className="flex flex-col gap-y-5 sm:gap-y-3">
                <p className="text-center text-3xl sm:text-5xl sm:text-start">let&apos;s get in touch!</p>
                <div className="flex flex-row gap-x-7 sm:gap-x-9 sm:ml-0.5">
                    {[["email", "mailto:anhtgdo@gmail.com"], ["linkedin", "https://linkedin.com/in/anhdotg"], ["github", "https://github.com/tuonganhdo"]].map((item, i) => (
                        <a href={item[1]} key={i} className="place-items-center text-xl sm:text-2xl hover:underline">
                            {item[0]}
                            <Image alt="link icon" src="/arrow-diag.png" className="size-3 inline ml-2 mb-0.5"/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}