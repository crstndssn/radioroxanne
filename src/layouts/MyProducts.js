import React, { Component } from 'react'

import MyProduct from '../components/MyProduct'
import AddProduct from '../components/AddProduct'

export default class MyProducts extends Component {
    render() {
        return (
            <div className="grid grid-cols-2 gap-5">
                <AddProduct/>
                <MyProduct/>
                <MyProduct/>
                <MyProduct/>
                <MyProduct/>
                <MyProduct/>
                <MyProduct/>
            </div>
        )
    }
}
