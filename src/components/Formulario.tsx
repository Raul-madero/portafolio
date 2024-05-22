'use client'
import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import Button from "./Button";

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');

    const [state, handleSubmit] = useForm("meqywgpz");
    if (state.succeeded) {
        return      <Button goTo={"/"} text={"Gracias por tu mensaje, me pondré en contacto lo mas pronto posible haz click para volver a la página principal"} content={""} target={"_self"} />;
        
    }


    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="nombre" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre:</label>
                    <ValidationError 
                        prefix="Nombre" 
                        field="nombre"
                        errors={state.errors}
                    />
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="apellido" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={apellido} onChange={(e) => setApellido(e.target.value)} required />
                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido:</label>
                    <ValidationError 
                        prefix="Apellido" 
                        field="apellido"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo Electronico:</label>
                <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="tel" pattern="[0-9]{10}" name="telefono" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
                    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero Telefónico (10 digitos):</label>
                    <ValidationError 
                        prefix="Telefono" 
                        field="telefono"
                        errors={state.errors}
                    />
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <textarea name="mensaje" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={mensaje} onChange={(e) => setMensaje(e.target.value)} required />
                    <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mensaje:</label>
                    <ValidationError 
                        prefix="Mensaje" 
                        field="mensaje"
                        errors={state.errors}
                    />
                </div>
            </div>
            <button type="submit" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-teal-200 rounded-lg bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 dark:bg-gray-700 dark:text-gray-200">Enviar</button>
        </form>
        


    )
}

export default Formulario