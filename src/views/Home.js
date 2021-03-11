import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="w-1/2 min-h-80 flex justify-center items-start flex-col pr-4">
                <h1 className="text-5xl font-medium my-1">Conéctate con el arte</h1>
                <p className="text-2xl font-serif my-1">Descubre nuevos artistas, apoyales con su trabajo y si eres creador o creadora tendras nuevas herrmientas para comunicarte.</p>
                <button className="bg-black p-3 text-2xl text-white my-2">Únete, es gratis</button>
            </div>
        )
    }
}
