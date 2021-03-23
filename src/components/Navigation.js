import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div className="container mx-auto flex justify-between items-center py-7 absolute top-0 left-0 right-0 bg-transparent w-full">
                <div className="w-1/5 justify-start items-end">
                    <Link to="/" className="logo text-3xl font-medium tracking-tight"><span className="font-serif">Radio</span><br/><span className="font-serif font-bold">Roxanne</span></Link>
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
