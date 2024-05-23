import CarruselAbout from "@/components/CarruselAbout"
import Title from "@/components/Title"
import { faBootstrap, faCss3, faGitAlt, faJs, faLinux, faNode, faPhp, faPython, faReact, faSass } from "@fortawesome/free-brands-svg-icons"
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const About = () => {
    return (
        <div className="mt-28 container mx-auto relative">
            <Title text="Sobre mi" />
            <CarruselAbout />
            <div className="flex flex-col items-center justify-center mt-10 bg-orange-600 dark:bg-slate-700 p-10 rounded-lg">
                <p className="block w-3/4 mx-auto text-emerald-400 dark:text-slate-300">Desarrollador de Software altamente motivado con habilidades para resolver problemas y pensamiento crítico. Competente en Python, JavaScript y React, con una pasión por construir soluciones de software fáciles de usar y eficientes. Dispuesto a aprovechar las habilidades transferibles de una carrera de enfermería de 15 años, incluida la excelente comunicación y la toma de decisiones bajo presión, para prosperar en un entorno de desarrollo de ritmo rápido.
                    <br />
                    Siguiendo mi pasión por el desarrollo de software, realicé un bootcamp donde aprendí y adquirí experiencia en importantes tecnologías tales como:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 w-full justify-center items-center">
                        <div className="border-2 mx-auto border-orange-400 rounded-lg p-10 dark:border-slate-300 w-1/2 flex flex-col items-center justify-center">
                            <FontAwesomeIcon icon={faHtml5} className="text-emerald-400 dark:text-slate-300 w-10 h-10" />
                        </div>
                        <div className="border-2 mx-auto border-orange-400 rounded-lg p-10 dark:border-slate-300 w-1/2 flex flex-col items-center justify-center">
                            <FontAwesomeIcon icon={faCss3} className="text-emerald-400 dark:text-slate-300 w-10 h-10" />
                        </div>
                        <div className="border-2 mx-auto border-orange-400 rounded-lg p-10 dark:border-slate-300 w-1/2 flex flex-col items-center justify-center">
                            <FontAwesomeIcon icon={faReact} className="text-emerald-400 dark:text-slate-300 w-10 h-10" />
                        </div>
                        <div className="border-2 mx-auto border-orange-400 rounded-lg p-10 dark:border-slate-300 w-1/2 flex flex-col items-center justify-center">
                            <FontAwesomeIcon icon={faGitAlt} className="text-emerald-400 dark:text-slate-300 w-10 h-10" />
                        </div>
                        <div className="border-2 mx-auto border-orange-400 rounded-lg p-10 dark:border-slate-300 w-1/2 flex flex-col items-center justify-center">
                            <FontAwesomeIcon icon={faJs} className="text-emerald-400 dark:text-slate-300 w-10 h-10" />
                        </div>
                        <div className="border-2 mx-auto border-orange-400 rounded-lg p-10 dark:border-slate-300 w-1/2 flex flex-col items-center justify-center">
                            <FontAwesomeIcon icon={faPython} className="text-emerald-400 dark:text-slate-300 w-10 h-10" />
                        </div>
                        <div className="border-2 mx-auto border-orange-400 rounded-lg p-10 dark:border-slate-300 w-1/2 flex flex-col items-center justify-center">
                            <FontAwesomeIcon icon={faDatabase} className="text-emerald-400 dark:text-slate-300 w-10 h-10" />
                        </div>
                        <div className="border-2 mx-auto border-orange-400 rounded-lg p-10 dark:border-slate-300 w-1/2 flex flex-col items-center justify-center">
                            <FontAwesomeIcon icon={faPhp} className="text-emerald-400 dark:text-slate-300 w-10 h-10" />
                        </div>
                        <div className="border-2 mx-auto border-orange-400 rounded-lg p-10 dark:border-slate-300 w-1/2 flex flex-col items-center justify-center">
                            <FontAwesomeIcon icon={faSass} className="text-emerald-400 dark:text-slate-300 w-10 h-10" />
                        </div>
                        <div className="border-2 mx-auto border-orange-400 rounded-lg p-10 dark:border-slate-300 w-1/2 flex flex-col items-center justify-center">
                            <FontAwesomeIcon icon={faBootstrap} className="text-emerald-400 dark:text-slate-300 w-10 h-10" />
                        </div>
                        <div className="border-2 mx-auto border-orange-400 rounded-lg p-10 dark:border-slate-300 w-1/2 flex flex-col items-center justify-center">
                            <FontAwesomeIcon icon={faLinux} className="text-emerald-400 dark:text-slate-300 w-10 h-10" />
                        </div>
                        <div className="border-2 mx-auto border-orange-400 rounded-lg p-10 dark:border-slate-300 w-1/2 flex flex-col items-center justify-center">
                            <FontAwesomeIcon icon={faNode} className="text-emerald-400 dark:text-slate-300 w-10 h-10" />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default About