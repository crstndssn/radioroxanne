import React, { Component } from 'react'
import MyProducts from './MyProducts'

export default class AddProduct extends Component {
    render() {
        return (
            <div className="grid grid-cols-2 gap-5">
                <MyProducts/>
                <MyProducts/>
                <MyProducts/>
                <MyProducts/>
            </div>
        )
    }
}
