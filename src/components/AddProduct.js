import React, { Component } from 'react'

export default class AddProduct extends Component {
    render() {
        return (
            <div className="bg-gray-100 rounded shadow flex justify-center items-center cursor-pointer">
                <p className="text-xl text-gray-500">+ Add Product</p>
            </div>
        )
    }
}
