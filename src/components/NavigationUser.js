import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavigationUser extends Component {
    render() {
        return (
            <div className="w-3/4 flex justify-center items-center flex-col text-center">
                <Link to="/add-post" className="w-1/3 border-2 border-black p-2 text-xl my-1">Nuevo Post</Link>
                <Link to="/add-product" className="w-1/3 border-2 border-black p-2 text-xl my-1">Nuevo Producto</Link>
                <Link to="/user/products" className="w-1/3 border-2 border-black p-2 text-xl my-1">Mis Productos</Link>
                <Link to="/user/posts" className="w-1/3 border-2 border-black p-2 text-xl my-1">Mis Posts</Link>
                <Link to="/configuracion" className="w-1/3 border-2 border-black p-2 text-xl my-1">Configuracion</Link>
            </div>
        )
    }
}
