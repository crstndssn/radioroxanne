import React, { Component } from 'react'

import Product from '../components/Product'

export default class Products extends Component {
    render() {
        return (
            <div className="grid grid-cols-3 gap-5 mt-7">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        )
    }
}
