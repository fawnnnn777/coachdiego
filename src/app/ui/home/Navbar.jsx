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
    <div className={`h-16 lg:h-20 w-screen bg-black text-yellow box-border flex items-center justify-between p-5`}>
        <button onClick={() => scrollToSection("benefits")} className={`rounded-2xl bg-white m-2 p-2 text-blue-500 
            ${montserrat.className}`}>Beneficios</button>
        <button className={`rounded-2xl bg-white m-2 p-2 text-blue-500 
            ${montserrat.className}`}>Precios</button>
        <button className={`rounded-2xl bg-yellow-500 m-2 p-2 text-white 
            ${montserrat.className}`}>Contact</button>
    </div>
    )
}