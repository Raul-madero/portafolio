import Pagination from "@/components/Paginador"
import ProyectoCard from "@/components/ProyectoCard"
import Title from "@/components/Title"
import { getStrapiURL } from "@/helpers/api-helpers"
import { fetchApi } from "@/helpers/fetch-api"
import { Proyecto } from "@/interfaces/Proyecto"

const url = getStrapiURL('/api/proyectos')

const getData = async (page = 1, pageSize = 6) => {
    const path = "proyectos"
    const urlParamsObject = {
        populate: '*',
        sort: {
            id: 'DESC'
        },
        pagination: {
            page,
            pageSize
        }
    }
    const { data, meta } = await fetchApi( path, urlParamsObject)
    return {
        data,
        pagination: meta.pagination
    }
}

interface Props {
    searchParams: {
        page?: string
    }
}
const Proyectos = async ({searchParams}: Props) => {
    const { page } = searchParams
    let pageNumber = page ? parseInt(page) : 1
    if (pageNumber < 1 || isNaN(pageNumber)) pageNumber = 1

    const { data, pagination } = await getData(pageNumber)

    return (
        <div className="mt-28 container mx-auto relative">
            <Title text="Proyectos" />
            <div className="w-3/4 grid gap-4 grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3 my-10">
                {
                    data.map((proyecto: Proyecto) => (
                        <ProyectoCard key={proyecto.id} proyecto={proyecto} />
                    ))
                }
            </div>
            <Pagination pagination={pagination} />
        </div>
    )
}

export default Proyectos