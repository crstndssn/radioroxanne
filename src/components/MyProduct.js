import React, { Component } from 'react'

import product from '../resources/product.png'

export default class MyProduct extends Component {
    render() {
        return (
            <div className="flex justify-center items-start flex-col border border-gray-200 shadow hover:shadow-md rounded-lg">
                <img src={product} alt="product" className="rounded-t-lg" />
                <div className="w-full flex justify-between items-start p-2">
                    <div>
                        <h1 className="text-2xl leading-tight">Nombre del producto</h1>
                        <p className="text-xl font-serif leading-tight">creador</p>
                    </div>
                    <button className="bg-black text-white text-xl p-2 my-1 rounded">$100.000</button>
                </div>
            </div>
        )
    }
}
