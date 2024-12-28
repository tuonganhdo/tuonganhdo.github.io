import Image from "next/image";
import { PROJECTS } from "@/content/projects"
import ProjectCard  from "@/components/projectcard";
import { sans, display } from '@/fonts';
import Loading from "@/components/loading";
import { redirect } from "next/navigation";

export default function Home() {
  redirect('/highlights')

  return (
    <div className="relative w-screen h-screen flex place-content-center">
      {/* <Loading/> */}
    </div>
  );
}
