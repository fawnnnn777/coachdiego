"use client"
import Image from "next/image"
import { montserrat } from "../fonts/fonts"

export default function Navbar(){

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
    <div className={`h-16 lg:h-20 w-screen bg-black text-yellow box-border flex items-center justify-evenly p-5`}>
        <p className="text-white text-xl">¿Estas Interesado?</p>
        <a href="https://wa.me/50259850761?text=Quiero%20más%20información%20de%20las%20clases%20de%20Inglés" className={`rounded-2xl bg-yellow-500 m-2 p-2 text-white 
            ${montserrat.className}`}>Más Información</a>
    </div>
    )
}