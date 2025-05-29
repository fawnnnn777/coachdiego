import Image from "next/image";
import { raleway, ralewaylight } from "./ui/fonts/fonts";
import { montserrat } from "./ui/fonts/fonts";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {


  return (
    <div className="bg-main h-fit box-border pb-20 lg:h-full lg:pb-0">
      <div className="flex-column"> 
        <div className="">
        <h1 className={`${raleway.className} antialiased text-6xl p-5`}>Es hora de aprender Inglés con el Coach Diego</h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <p className={`${ralewaylight.className} antialised text-2xl p-5`}>¡Con 5 años de experiencia enseñando Inglés y ayudando a personas de todo el mundo!</p>
          <iframe width="360" height="201" src="https://www.youtube.com/embed/sJmNw-67R24?si=42XDs_u4W7WuoJFJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>      </div>
        </div>
      <div id="benefits" className="mt-8">
        <h1 className={`${raleway.className} antialiased text-5xl p-5 `} >¡Con la calidad de academias reconocidas mundialmente, a la mitad del precio!</h1>
        <p className={`${ralewaylight.className} antialised text-2xl p-5`}>¡Quiero ayudarte a conseguir tu meta este año! Ya sea que quieras un <strong>nuevo trabajo, un ascenso o simplemente quieras ser bilingüe.</strong></p>
        <p className={`${ralewaylight.className} antialised text-2xl m-5 px-5 border-2 border-black rounded  text-center bg-black text-white shadow-xl`}><i>"Él es buen coach, porque conoce las debilidades de cada uno de sus estudiantes, y sé enfoca en ayudar a superarlas, tiene buena actitud siempre, siempre nos motiva, se toma el tiempo para el feedback, y aprovecha cada segundo de la clase para que todos participemos, indudablemente Él es el mejor"</i></p>
      </div>
      <div id="price">
      <h1 className={`${raleway.className} antialiased text-6xl p-5`}>¡Solo Q400/$55 mensuales!</h1>
      <p className={`${ralewaylight.className} antialised text-2xl p-5`}>Sacale provecho a tu dinero y obtén:</p>
      <p className={`${ralewaylight.className} antialised text-2xl m-3 p-4 rounded  text-center bg-white text-black shadow-xl`}>Clases de Lunes, Miercoles y Viernes con horarios que se acomodan a ti</p>
      <p className={`${ralewaylight.className} antialised text-2xl m-3 p-4 rounded  text-center bg-white text-black shadow-xl`}>Material y guías de practica para ayudarte a alcanzar tu meta</p>
      <p className={`${ralewaylight.className} antialised text-2xl m-3 p-4 rounded  text-center bg-white text-black shadow-xl`}>Asesoría privada mensual para evaluar tus áreas de mejora</p>
      <h1 className={`${raleway.className} antialiased text-6xl p-5`}>¡Pregunta por el descuento del primer mes! <FaArrowDown className="float-right pr-5"/>
      </h1>
      </div>
    </div>
  );
}
