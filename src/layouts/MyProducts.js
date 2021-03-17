import React, { Component } from 'react'

import MyProduct from '../components/MyProduct'

export default class MyProducts extends Component {
    render() {
        return (
            <div className="grid grid-cols-3 gap-5">
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
