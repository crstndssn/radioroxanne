import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

import artist from '../resources/artist.png'

export default class Artist extends Component {
    render() {
        return (
            <Link to="/user" className="static">
                <div className="imagen-artist">
                    <img src={artist} alt="artist" className="static z-01 rounded-lg shadow hover:shadow-md" />
                    <h1 className="text-2xl mx-1 font-base hover:font-bold">Laura</h1>
                </div>
            </Link>
        )
    }
}
