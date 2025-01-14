import Image from "next/image";
import { raleway, ralewaylight } from "./ui/fonts/fonts";
import { montserrat } from "./ui/fonts/fonts";

export default function Home() {


  return (
    <div className="bg-main h-fit box-border pb-20 lg:h-full lg:pb-0">
      <div>
        <h1 className={`${raleway.className} antialiased text-6xl p-5`}>Es hora de aprender Inglés con el Coach Diego</h1>
        <div className="w-full flex">
          <p className={`${ralewaylight.className} antialised text-2xl p-5`}>¡Con 5 años de experiencia enseñando Inglés y ayudando a personas de todo el mundo!</p>
        </div>
         {/* <Image
          src={'/me.png'}
          width={250}
          height={250}
          ></Image>*/}
      <iframe className="mx-auto" width="320" height="180" src="https://www.youtube.com/embed/wQYQzYnPrtg" title="B3 CLASS EXAMPLE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div id="benefits" className="mt-8">
        <h1 className={`${raleway.className} antialiased text-5xl p-5 `} >¡Con la calidad de academias reconocidas mundialmente, a la mitad del precio!</h1>
      </div>
    </div>
  );
}
