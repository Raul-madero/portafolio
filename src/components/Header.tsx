'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const logo = require("@/img/logo/logoLight.png");
const logoColor = require( "@/img/logo/logo.png")

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [tema, setTema] = useState("light")
    const [imagen, setImagen] = useState(logo)
    
    useEffect(() => {
        if(window.localStorage.getItem("tema") === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches){
            setTema("dark")
            setImagen(logoColor)
        } else {
            setTema("light")
            setImagen(logo)
        }
    }, [tema])

    const handleClick = () => {
        setOpenMenu(!openMenu);
    }
    return (
        <nav className="bg-emerald-300 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 drop-shadow-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image width={100} height={100} src= { imagen} className="h-8" alt="Raul Madero Logo" />
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">

                    </button>
                    <button onClick={ handleClick } data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className={`items-center bg-emerald-300 dark:bg-gray-900 justify-between w-full md:flex md:w-auto md:order-1 ${openMenu ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-emerald-300 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/about" className="block py-2 px-3 text-orange-600 rounded md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Acerca de mi</Link>
                        </li>
                        <li>
                            <Link href="/proyectos" className="block py-2 px-3 text-orange-600 rounded md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Proyectos</Link>
                        </li>
                        <li>
                            <Link href="/contacto" className="block py-2 px-3 text-gray-900 rounded md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        


    )
}

export default Header;