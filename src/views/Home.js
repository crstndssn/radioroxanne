import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import piano from '../resources/piano.svg'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="container mx-auto flex justify-center items-center">
                        <div className="w-1/2 min-h-90 flex justify-center items-start flex-col pr-4">
                            <h1 className="text-6xl font-base font-serif my-4"><i className="underline">Conéctate</i> con el arte</h1>
                            <p className="text-2xl my-1">Descubre nuevos artistas, apoyales con su trabajo y si eres creador o creadora tendras nuevas herramientas para comunicarte.</p>
                            <Link to="/login" className="bg-black px-3 py-2 rounded text-2xl font-serif text-white my-3">Únete, es gratis</Link>
                        </div>
                        <div className="w-1/2">
                            <img src={piano} alt="piano" />
                        </div>
                    </div>
                </div>
                {/* <div className="bg-orange">
                    <div className="container mx-auto flex justify-center items-center min-h-90 w-2/3">
                        <div className="bg-paper p-20">
                            <h1 className="text-6xl font-base font-serif my-4 w-1/2 leading-none">Una comunidad para <i className="underline">artistas</i></h1>
                            <p className="text-2xl font-serif my-1 w-1/2 leading-none">Sintoniza <b>Radio Roxanne</b>, comparte tu idea y vende tu producto.</p>
                        </div>
                    </div>
                </div> */}
            </div>


        )
    }
}
