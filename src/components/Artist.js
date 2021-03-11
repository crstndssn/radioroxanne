import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

import artist from '../resources/artist.png'

export default class Artist extends Component {
    render() {
        return (
            <Link to="/user" className="static bg-white">
                <div className="imagen-artist">
                    <img src={artist} alt="artist" className="static z-01" />
                    <h1 className="text-2xl mx-1">Laura</h1>
                </div>
            </Link>
        )
    }
}
