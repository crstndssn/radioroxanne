import React, { Component } from 'react'

import Porfile from '../components/Porfile'

import Tools from './Tools'
import MyPosts from './MyPosts'
import MyProducts from './MyProducts'



export default class User extends Component {
    render() {
        return (
            <div className="flex justify-center items-start flex-col">

                <div className="w-full">
                    <Porfile />
                </div>


                <div className="w-full flex justify-center items-start flex-col">

                    <div className="w-full my-5">
                        <h1 className="mb-5 text-3xl font-medium">Herramientas</h1>
                        <Tools />
                    </div>

                    {/* <div className="w-full my-5">
                        <h1 className="mb-5 text-3xl font-medium">Mis productos</h1>
                        <MyProducts />
                    </div> */}

                    <div className="w-full my-5">
                        <h2 className="mb-5 text-3xl font-medium">Mis posts</h2>
                        <MyPosts />
                    </div>

                </div>


            </div>
        )
    }
}
