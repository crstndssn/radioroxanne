import React, { Component } from 'react'

import product from '../resources/product.png'

export default class Product extends Component {
    render() {
        return (
            <div className="border-2 border-black flex justify-center items-center flex-col">
                <img src={product} alt="product" />
                <div className="flex justify-center items-start flex-col">
                    <p className="text-xl font-serif">creador</p>
                    <h1 className="text-2xl my-1">Nombre del producto</h1>
                    <button className="bg-black text-white text-xl p-2 my-2">$100.000</button>
                </div>
            </div>
        )
    }
}
