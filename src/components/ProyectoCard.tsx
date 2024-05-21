import { getStrapiURL } from "@/helpers/api-helpers"
import { fetchApi } from "@/helpers/fetch-api"
import { Proyecto } from "@/interfaces/Proyecto"
import Image from "next/image"

interface Props {
    proyecto: Proyecto
}

const ProyectoCard = async ({proyecto}: Props) => {
    const {title, description, image, proyecturl} = proyecto.attributes
    const {url, width, height}= image.data[0].attributes.formats.small

    return (
        <div key={proyecto.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={proyecturl}>
                <Image width={width} height={height} className="rounded-t-lg" src={url} alt={title} />
            </a>
            <div className="p-5">
                <a href={proyecturl}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <a href= {proyecturl} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Ver en vivo
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default ProyectoCard