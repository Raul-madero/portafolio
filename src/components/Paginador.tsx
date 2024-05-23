import { Paginator } from "@/interfaces/Paginator"
import Link from "next/link"

interface Props {
    pagination: Paginator
}

const Paginador = ({pagination}: Props) => {
    const { page, pageSize, pageCount, total } = pagination
    const classNumber = "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    const classNumberActive = "flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
    const classPrevious = "flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    const classNext = "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    if (pageCount <= 1) {
        return null
    }
    return (
        <nav aria-label="Page navigation example" className="text-center mb-10">
            <ul className="inline-flex -space-x-px text-sm">
                <li>
                <Link href={page === 1 ? "#" : `/proyectos?page=${page - 1}`} className= {page === 1 ? "opacity-50 pointer-events-none" : classPrevious}>Previous</Link>
                </li>
               {
                Array.from({length: pageCount}).map((_, index) => (
                    <li>
                        <Link href={`/proyectos?page=${index + 1}`} className={page === index + 1 ? classNumberActive : classNumber}>{index + 1}</Link>
                    </li>
                ))
               }
                <li>
                <a href={page === pageCount ? "#" : `/proyectos?page=${page + 1}`} className= {page === pageCount ? "opacity-50 pointer-events-none" : classNext}>Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Paginador