import Image from "next/image"
import { montserrat } from "../fonts/fonts"

export default function Navbar(){
    return (
    <div className={`h-16 lg:h-20 w-screen bg-black text-yellow box-border flex items-center justify-between p-5`}>
        <h1 className={`text-white p-5 text-2xl ${montserrat.className}`}>Coach Diego</h1>
        <button className={`rounded-2xl bg-white m-2 p-2 border-2 border-white text-blue-500 
            ${montserrat.className}`}>Más Información</button>
    </div>
    )
}