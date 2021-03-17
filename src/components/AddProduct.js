import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddProduct extends Component {
    render() {
        return (
            <Link to="/add-product">
                <div className="w-full h-32 border border-gray-200 flex justify-center items-center shadow hover:shadow-md rounded-lg cursor-pointer">
                    <p className="text-2xl text-gray-800 font-medium">Subir un producto</p>
                </div>
            </Link>
        )
    }
}
