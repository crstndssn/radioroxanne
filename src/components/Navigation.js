import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div className="flex justify-between items-center py-7">
                <div className="w-1/5 justify-start items-end">
                    <Link to="/" className="logo text-3xl font-serif font-medium tracking-tight">Radio<br/>Roxanne</Link>
                </div>
                <div className="w-3/5 flex justify-center items-center">
                    <Link to="/artistas" className="text-xl font-medium font-serif tracking-tight mx-7">artistas</Link>
                    <Link to="/tienda" className="text-xl font-medium font-serif tracking-tight mx-7">tienda</Link>
                    <Link to="/blog" className="text-xl font-medium font-serif tracking-tight mx-7">blog</Link>
                </div>
                <div className="w-1/5 flex justify-end items-center">
                    <Link to="/login" className="text-xl text-white bg-black py-1 px-2 font-serif rounded font-medium tracking-tight">conéctate</Link>
                </div>
            </div>

        )
    }
}
