import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CrearCuenta from './Componentes/CrearCuenta';
import Login from './Componentes/Login';
import Admin from './Componentes/Admin';
import Home from './Componentes/Home';
import CrearCategoria from './Componentes/CrearCategoria';
import ActualizarCategoria from './Componentes/categorias/ActualizarCategoria';
import HomeProductos from './Componentes/productos/HomeProductos';
import CrearProductos from './Componentes/productos/CrearProductos';

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" exact element= {<Home/>}/>
        <Route path="/login" exact element= {<Login/>}/>
        <Route path="/crear-cuenta" exact element= {<CrearCuenta/>}/>
        <Route path="/admin" exact element= {<Admin/>}/>
        <Route path="/crear-categoria" exact element= {<CrearCategoria/>}/>
        <Route path="/actualizar-categoria/:idCategoria" exact element= {<ActualizarCategoria/>}/>
        <Route path="/home-productos/:idCategoria" exact element= {<HomeProductos/>}/>
        <Route path="/crear-productos/:idCategoria" exact element= {<CrearProductos/>}/>
      </Routes>
    </Router>

  );
}

export default App;