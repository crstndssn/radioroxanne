import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Porfile from '../components/Porfile'
import AddPost from '../components/AddPost'
import AddProduct from './AddProduct'
import Configuration from '../components/Configuration'

import MyPosts from './MyPosts'
import MyProducts from './MyProducts'


import NavbarUser from '../components/NavbarUser'

export default class User extends Component {
    render() {
        return (
            <div className="flex justify-center items-start">

                <div className="w-1/4">
                    <Porfile />    
                </div>


                <Router>

                    <div className="w-3/4 pl-12 flex justify-center items-start flex-col">
                        <NavbarUser />

                        <Route path="/user/products" component={MyProducts} />                       
                        <Route path="/user/posts" component={MyPosts} />                       


                        <Route path="/add-post" component={AddPost} />
                        <Route path="/add-product" component={AddProduct} />
                        <Route path="/configuracion" component={Configuration} />

                    </div>

                </Router>

            </div>
        )
    }
}
