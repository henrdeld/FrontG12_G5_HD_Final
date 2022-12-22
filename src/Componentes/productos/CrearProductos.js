//import React from "react";
import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import crud from '../../conexiones/crud';
import swa1 from 'sweetalert';
//import { Link } from "react-router-dom";


const CrearProductos = () => {

    const navigate = useNavigate();
    const { idCategoria } = useParams();

    const [categoria, setCategoria] = useState({
        nombre: '',
        descripcion: '',
        stock: '',
        precio: '',
        imagen: '',
        categoriaId: ''


    });

    const { nombre, descripcion, stock, precio, imagen } = categoria;

    const onChange = (e) => {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    };

    const ingresarCategoria = async () => {

        const data = {
            nombre: categoria.nombre,
            descripcion: categoria.descripcion,
            stock: categoria.stock,
            precio: categoria.precio,
            imagen: categoria.imagen,
            categoriaId: idCategoria

        }
        //console.log(data)
        const response = await crud.POST(`/api/productos`, data)
        const mensaje = response.msg;
        console.log(mensaje);
        const mensajeCat = "EL producto fue creada correctamente"
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
        navigate(`/home-productos/${idCategoria}`);


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
                            Crear Productos
                        </h1>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <form
                            onSubmit={onSubmit}
                            className="my-10 bg-white shadow rounded-lg p-10"
                        >
                            <div className="my-5">
                                <label className="uppercase text-gray-600 block text-lx font-bold">Nombre del producto</label>
                                <input
                                    type="nombre"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Nombre"
                                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                                    value={nombre}
                                    onChange={onChange}
                                />

                                <label className="uppercase text-gray-600 block text-lx font-bold">descripcion del producto</label>
                                <input
                                    type="text"
                                    id="descripcion"
                                    name="descripcion"
                                    placeholder="descripcion"
                                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                                    value={descripcion}
                                    onChange={onChange}
                                />

                                <label className="uppercase text-gray-600 block text-lx font-bold">stock del producto</label>
                                <input
                                    type="number"
                                    id="stock"
                                    name="stock"
                                    placeholder="stock"
                                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                                    value={stock}
                                    onChange={onChange}
                                />

                                <label className="uppercase text-gray-600 block text-lx font-bold">precio del producto</label>
                                <input
                                    type="number"
                                    id="precio"
                                    name="precio"
                                    placeholder="precio"
                                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                                    value={precio}
                                    onChange={onChange}
                                />

                                <label className="uppercase text-gray-600 block text-lx font-bold">Imagen del producto</label>
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
                                value="Crear Productos"
                                className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
                            />


                        </form>


                    </div>

                </main>
            </div>




        </>

    );
}
export default CrearProductos;