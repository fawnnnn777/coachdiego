import Image from "next/image";
import { raleway, ralewaylight } from "./ui/fonts/fonts";
import { montserrat } from "./ui/fonts/fonts";

export default function Home() {


  return (
    <div className="bg-main h-fit box-border pb-20 lg:h-full lg:pb-0">
      <div className="flex-column"> 
        <div className="">
        <h1 className={`${raleway.className} antialiased text-6xl p-5`}>Es hora de aprender Inglés con el Coach Diego</h1>
        </div>
        <div className="w-full flex">
          <p className={`${ralewaylight.className} antialised text-2xl p-5`}>¡Con 5 años de experiencia enseñando Inglés y ayudando a personas de todo el mundo!</p>
        </div>
      <iframe className="mx-auto" width="320" height="180" src="https://www.youtube.com/embed/wQYQzYnPrtg" title="B3 CLASS EXAMPLE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div id="benefits" className="mt-8">
        <h1 className={`${raleway.className} antialiased text-5xl p-5 `} >¡Con la calidad de academias reconocidas mundialmente, a la mitad del precio!</h1>
        <p className={`${ralewaylight.className} antialised text-2xl m-5 px-5 border-2 border-black rounded  text-center bg-black text-white shadow-xl`}>Aprende Inglés en 10 MESES O MENOS</p>
        <p className={`${ralewaylight.className} antialised text-2xl m-5 px-5 border-2 border-black rounded  text-center bg-black text-white shadow-xl`}>Clases interectivas con feedback personalizado</p>
        <p className={`${ralewaylight.className} antialised text-2xl m-5 px-5 border-2 border-black rounded  text-center bg-black text-white shadow-xl`}>Ten conversaciones fluidas y mejora tu carrera</p>
      </div>
      <div id="price">
      <h1 className={`${raleway.className} antialiased text-6xl p-5`}>Q0 por inscribirte, Q300 mensuales que incluyen:</h1>
      <p className={`${ralewaylight.className} antialised text-2xl m-5 p-4 rounded  text-center bg-white text-black shadow-xl`}>Clases de Lunes a Viernes con horarios que se acomodan a tu vida</p>
      <p className={`${ralewaylight.className} antialised text-2xl m-5 p-4 rounded  text-center bg-white text-black shadow-xl`}>Material y guías de practica para ayudarte a alcanzar tu meta</p>
      <p className={`${ralewaylight.className} antialised text-2xl m-5 p-4 rounded  text-center bg-white text-black shadow-xl`}>Asesoría privada mensual para evaluar tus áreas de mejora</p>
      </div>
    </div>
  );
}
