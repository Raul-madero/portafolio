
import Image from "next/image"

const CarruselAbout = () => {
    return (
        <div className="flex flex-wrap w-full mx-auto justify-center items-center my-10">
            <Image width={200} height={300} src="https://i.ibb.co/JRhXC8x/IMG-3414.jpg" alt="Imagen personal" />
            <Image width={200} height={300} src="https://i.ibb.co/QnhWx66/IMG-3395.jpg" alt="Imagen personal" />
            <Image width={200} height={300} src="https://i.ibb.co/rdrpJj1/IMG-3446.jpg" alt="Imagen personal" />
            <Image width={200} height={300} src="https://i.ibb.co/X4XKqYD/IMG-3430.jpg" alt="Imagen personal" />
            <Image width={200} height={300} src="https://i.ibb.co/nQjM79y/IMG-3436.jpg" alt="Imagen personal" />
        </div>
    )
}

export default CarruselAbout