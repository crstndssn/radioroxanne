import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavigationUser extends Component {
    render() {
        return (
            <div className="w-full flex justify-between items-center text-center mb-5">
                <Link exact to="/user/products" className="w-1/3 hover:bg-black rounded hover:text-white transition duration-200 p-2 text-xl">Mis Productos</Link>
                <Link to="/user/posts" className="w-1/3 hover:bg-black rounded hover:text-white transition duration-200 p-2 text-xl ">Mis Posts</Link>
                <Link to="/configuracion" className="w-1/3 hover:bg-black rounded hover:text-white transition duration-200 p-2 text-xl">Herramientas</Link>
            </div>
        )
    }
}
