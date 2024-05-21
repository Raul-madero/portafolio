import Link from "next/link";

interface Props {
    goTo: string;
    content: any;
    text: string;
}

const Button = ({goTo, content, text }: Props) => {
    return (
        <Link href={goTo} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-teal-200 rounded-lg bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 dark:bg-gray-700 dark:text-gray-200">
            {text } {content}
        </Link> 
    )
}

export default Button;