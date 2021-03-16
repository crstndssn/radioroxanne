import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import piano from '../resources/piano.svg'

export default class Home extends Component {
    render() {
        return (
            <div className="flex justify-center items-center">
                <div className="w-1/2 min-h-80 flex justify-center items-start flex-col pr-4">
                    <h1 className="text-5xl font-medium font-serif my-1"><i>Conéctate</i> con el arte</h1>
                    <p className="text-2xl my-1">Descubre nuevos artistas, apoyales con su trabajo y si eres creador o creadora tendras nuevas herramientas para comunicarte.</p>
                    <Link to="/login" className="bg-black px-3 py-2 rounded text-2xl font-serif text-white my-2">Únete, es gratis</Link>
                </div>
                <div className="w-1/2">
                    <img src={piano} alt="piano"/>
                </div>
            </div>

        )
    }
}
