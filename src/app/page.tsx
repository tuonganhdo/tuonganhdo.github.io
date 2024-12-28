import { redirect } from "next/navigation";

export default function Home() {
  redirect('/highlights')

  return (
    <div className="relative w-screen h-screen flex place-content-center">
      {/* <Loading/> */}
    </div>
  );
}
