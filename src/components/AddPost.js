import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class AddPost extends Component {
    render() {
        return (
            <Link to="/crear-post">
                <div className="w-full h-32 flex justify-center items-center border border-gray-200 shadow hover:shadow-md rounded-lg cursor-pointer">
                    <p className="text-2xl text-gray-800 font-medium">Crear Post</p>
                </div>
            </Link>
        )
    }
}
