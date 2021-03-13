import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavigationUser extends Component {
    render() {
        return (
            <div className="w-full flex justify-between items-center text-center my-7">
                <Link to="/user/products" className="w-1/3 border-b border-black p-2 text-xl mx-7">Mis Productos</Link>
                <Link to="/user/posts" className="w-1/3 border-b border-black p-2 text-xl mx-7">Mis Posts</Link>
                <Link to="/configuracion" className="w-1/3 border-b border-black p-2 text-xl mx-7">Herramientas</Link>
            </div>
        )
    }
}
