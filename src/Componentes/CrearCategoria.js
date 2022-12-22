//import React from "react";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import crud from '../conexiones/crud';
import swa1 from 'sweetalert';
//import { Link } from "react-router-dom";


const CrearCategoria = () => {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState({
        nombre: '',
        imagen: ''

    });

    const { nombre, imagen } = categoria;

    const onChange = (e) => {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    };

    const ingresarCategoria = async () => {

        const data = {
            nombre: categoria.nombre,
            imagen: categoria.imagen

        }
        //console.log(data)
        const response = await crud.POST(`/api/categorias`, data)
        const mensaje = response.msg;
        console.log(mensaje);
        const mensajeCat = "La categoría fue creada correctamente"
        swa1({
            title: 'Información',
            text: mensajeCat,
            icon: 'success',
            buttons: {
                confirm: {
                    text: 'OK',
                    value: true,
                    visible: true,
                    className: 'btn btn-primary',
                    closeModal: true
                }
            }
        });

        //redireccionar nuevamente a la página de admin
        navigate("/Admin");


    };

    const onSubmit = (e) => {  //lee la variable e lo que tiene las cajas
        e.preventDefault();    // no vuelve a cargar toda la página, REACT no necesita que la página se actualice
        ingresarCategoria();
    }

    return (
        <>
            <Header />
            <div className="md:flex md:min-h-screen">
                <Sidebar />
                <main className="flex-1">
                    <div className="mt-10 flex justify-center">
                        <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                            Crear Categorías
                        </h1>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <form
                            onSubmit={onSubmit}
                            className="my-10 bg-white shadow rounded-lg p-10"
                        >
                            <div className="my-5">
                                <label className="uppercase text-gray-600 block text-lx font-bold">Nombre de la categoria</label>
                                <input
                                    type="nombre"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Nombre"
                                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                                    value={nombre}
                                    onChange={onChange}
                                />

                                <label className="uppercase text-gray-600 block text-lx font-bold">Imagen de la categoría</label>
                                <input
                                    type="text"
                                    id="imagen"
                                    name="imagen"
                                    placeholder="imagen"
                                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                                    value={imagen}
                                    onChange={onChange}
                                />


                            </div>
                            <input
                                type="submit"
                                value="Crear categoria"
                                className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
                            />


                        </form>


                    </div>

                </main>
            </div>




        </>

    );
}
export default CrearCategoria;