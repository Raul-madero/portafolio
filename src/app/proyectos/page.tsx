import Pagination from "@/components/Pagination"
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
            id: 'ASC'
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

const Proyectos = async () => {
    const { data, pagination } = await getData()
    console.log(data)
    return (
        <div className="mt-28 container mx-auto relative">
            <Title text="Proyectos" />
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3 my-10">
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