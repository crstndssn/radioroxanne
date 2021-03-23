import React, { Component } from 'react'

import Products from '../layouts/Products'

export default class Store extends Component {
    render() {
        return (
            <div className="container mx-auto">
                <Products />
            </div>
        )
    }
}
