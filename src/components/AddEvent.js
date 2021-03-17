import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddEvent extends Component {
    render() {
        return (
            <Link to="/crear-evento">
                <div className="w-full h-32 bg-gray-300 flex justify-center items-center flex-col shadow rounded cursor-pointer">
                    <p className="text-2xl text-gray-500">Crear Evento</p>
                    <p className="text-lg text-gray-500">(Próximamente)</p>
                </div>
            </Link>
        )
    }
}
