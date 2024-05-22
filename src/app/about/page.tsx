import CarruselAbout from "@/components/CarruselAbout"
import Title from "@/components/Title"

const About = () => {
    return (
        <div className="mt-28 container mx-auto relative">
            <Title text="Sobre mi" />
            <CarruselAbout />
            <div className="flex flex-col items-center justify-center mt-10 bg-orange-600 dark:bg-slate-700 p-10 rounded-lg">
                <p className="block w-3/4 mx-auto text-emerald-400 dark:text-slate-300">Desarrollador de Software altamente motivado con habilidades para resolver problemas y pensamiento crítico. Competente en Python, JavaScript y React, con una pasión por construir soluciones de software fáciles de usar y eficientes. Dispuesto a aprovechar las habilidades transferibles de una carrera de enfermería de 15 años, incluida la excelente comunicación y la toma de decisiones bajo presión, para prosperar en un entorno de desarrollo de ritmo rápido.
                    <br />
                    Siguiendo mi pasión por el desarrollo de software, realicé un bootcamp donde aprendí y adquirí experiencia en importantes tecnologías tales como:
                    <br />
                    JavaScript
                    <br />
                    SQL
                    <br />
                    React
                    <br />
                    Python
                    <br />
                    Flask
                    <br />
                    HTML
                    <br />
                    CSS
                    <br />
                    API
                    <br />
                    Entre otros.
                    </p>
            </div>
        </div>
    )
}

export default About