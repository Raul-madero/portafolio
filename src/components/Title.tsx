import { Lato } from "next/font/google"

const lato = Lato({
    subsets: ["latin"],
    weight: ["400", "700"],
})
interface Props {
    text: string
}

const Title = ({text}: Props) => {
    return <h1 className= {`${lato.className} text-5xl font-bold text-center text-cyan-500 md:text-6xl md:text-cyan-500`}  >{text}</h1>
}

export default Title