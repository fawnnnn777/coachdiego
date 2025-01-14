import Image from "next/image";
import { raleway, ralewaylight } from "./ui/fonts/fonts";
import { montserrat } from "./ui/fonts/fonts";

export default function Home() {
  return (
    <div className="bg-main h-fit box-border pb-20 lg:h-full lg:pb-0">
      <div>
        <h1 className={`${raleway.className} antialiased text-6xl p-5`}>Es hora de aprender Inglés con el Coach Diego</h1>
        <div className="w-full flex">
          <p className={`${ralewaylight.className} antialised text-2xl p-5`}>Con 5 anios de experiencia, ensenando ingles y ayudando a personas alrededor del mundo</p>
        </div>
          <Image
          src={'/me.png'}
          width={250}
          height={250}
          ></Image>
      </div>
    </div>
  );
}
