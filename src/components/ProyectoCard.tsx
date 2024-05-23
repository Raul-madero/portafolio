import { getStrapiURL } from "@/helpers/api-helpers"
import { fetchApi } from "@/helpers/fetch-api"
import { Proyecto } from "@/interfaces/Proyecto"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

interface Props {
    proyecto: Proyecto
}

const ProyectoCard = async ({proyecto}: Props) => {
    const {title, description, image, proyecturl} = proyecto.attributes
    const {url, width, height}= image.data[0].attributes.formats.small
    console.log(proyecturl)
    return (
        <div key={proyecto.id} className="max-w-sm bg-green-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={proyecturl}>
                <Image width={width} height={height} className="rounded-t-lg" src={url} alt={title} />
            </Link>
            <div className="p-5">
                <Link href={proyecturl}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <Button goTo={proyecturl} content={
                    (<svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg> )} text={'Ir al sitio'} target={"_blank"} />
            </div>
        </div>
    )
}

export default ProyectoCard