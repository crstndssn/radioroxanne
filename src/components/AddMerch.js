import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class AddMerch extends Component {
    render() {
        return (
            <Link to="/crear-merch">
                <div className="w-full h-32 bg-gray-300 flex justify-center items-center flex-col shadow rounded cursor-pointer">
                    <p className="text-2xl text-gray-500">Crear Merch</p>
                    <p className="text-lg text-gray-500">(Próximamente)</p>
                </div>
            </Link>
        )
    }
}
