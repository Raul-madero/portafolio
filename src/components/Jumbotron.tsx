import Link from "next/link"
import Button from "./Button"

const Jumbotron = () => {
    return (
        <section className="bg-center bg-cover bg-no-repeat bg-[url('https://i.ibb.co/9ZhdCCq/code.webp')] bg-gray-700 bg-blend-multiply h-screen">
            <div className="flex flex-col justify-center h-full px-4 mx-auto max-w-screen-xl py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Hola: <br />Soy<span className="text-blue-500 dark:text-neutral-500"> Raul Madero</span></h1>
                <p className="mb-8 text-md font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48">Web Developer</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <Button goTo={"/about"} content={
                    (<svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg> )} text={'Acerca de mi'} target={"_self"} />
                </div>
            </div>
        </section>
    )
}

export default Jumbotron