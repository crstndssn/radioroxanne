import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div className="flex justify-between items-center pt-7">
                <div className="w-1/5 justify-start items-end">
                    <Link to="/" className="logo text-3xl font-semibold tracking-tight">Radio<br/>Roxanne</Link>
                </div>
                <div className="w-3/5 flex justify-center items-center">
                    <Link to="/artistas" className="text-xl font-medium tracking-tight mx-7">Artistas</Link>
                    <Link to="/tienda" className="text-xl font-medium tracking-tight mx-7">Tienda</Link>
                    <Link to="/blog" className="text-xl font-medium tracking-tight mx-7">Blog</Link>
                </div>
                <div className="w-1/5 flex justify-center items-center">
                    <Link to="/login" className="text-xl font-medium tracking-tight mx-7">Ingresa</Link>
                    <Link to="/signup" className="text-xl font-medium bg-black text-white p-2 tracking-tight">Registrate</Link>
                </div>
            </div>

        )
    }
}
