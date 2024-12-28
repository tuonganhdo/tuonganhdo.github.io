import ContactButton from "@/components/contact-button";
import { display } from "@/fonts";

export default function Contact() {
    return(
        <div className="grow w-screen flex flex-col justify-center place-items-center">
            <div className="w-fit flex flex-col gap-y-8">
                <p className={`text-3xl sm:text-4xl text-center ${display.className}`}>let&apos;s get in touch!</p>
                <div className="flex flex-col sm:grid sm:grid-cols-3 gap-y-5 gap-x-1 md:gap-x-3 place-items-start sm:place-items-center">
                    <ContactButton method="email" text="anhtgdo@gmail.com" destination="mailto:anhtgdo@gmail.com"/>
                    <ContactButton method="linkedin" text="Anh Do" destination="https://linkedin.com/in/anhdotg"/>
                    <ContactButton method="github" text="tuonganhdo" destination="https://github.com/tuonganhdo"/>
                </div>
            </div>
        </div>
    );
}