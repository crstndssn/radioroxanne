import React, { Component } from 'react'

import AddPost from '../components/AddPost'
import AddProduct from '../components/AddProduct'
import AddMerch from '../components/AddMerch'
import AddEvent from '../components/AddEvent'

export default class Tools extends Component {
    render() {
        return (
            <div className="grid md:grid-cols-4 gap-3">
                <AddPost/>
                {/* <AddProduct/>
                <AddMerch/>
                <AddEvent/> */}
            </div>
        )
    }
}
