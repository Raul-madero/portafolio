import Formulario from "@/components/Formulario";
import Title from "@/components/Title";
import Link from "next/link";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contacto = () => {
    return (
        <div className="mt-28 container mx-auto p-28">
            <div className="mb-10">
                <Title text={"Enviame un mensaje"} />
            </div>
            <Formulario />
            <div className="w-1/2 mx-auto flex items-center justify-center flex-col gap-10">
                <Title text={"O"} />
                <Link href="https://wa.link/sd4w05" target="_blank">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-36 h-36 text-green-500" />
                </Link>
            </div>

        </div>
    )
}

export default Contacto;