import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Porfile from '../components/Porfile'
import UserPosts from '../components/UserPosts'
import UserProducts from '../components/UserProducts'
import AddPosts from '../components/AddPosts'
import AddProduct from '../components/AddProduct'
import Configuration from '../components/Configuration'


import NavbarUser from '../components/NavbarUser'

export default class User extends Component {
    render() {
        return (
            <div className="flex justify-center items-start mt-8">
                <Porfile />
                <Router>
                    <div className="w-3/4 pl-12 flex justify-center items-start flex-col">
                        <NavbarUser />
                        <Route path="/add-post" component={AddPosts} />
                        <Route path="/add-product" component={AddProduct} />
                        <Route path="/user/products" component={UserProducts} />
                        <Route path="/user/posts" component={UserPosts} />
                        <Route path="/configuracion" component={Configuration} />
                    </div>
                </Router>
            </div>
        )
    }
}
