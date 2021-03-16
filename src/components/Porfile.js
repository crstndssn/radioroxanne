import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import photo from '../resources/artist.png'

// import instagram from '../resources/instagram.svg'
// import facebook from '../resources/facebook-black.svg'
// import github from '../resources/github.svg'
// import youtube from '../resources/youtube.svg'
// import spotify from '../resources/spotify.svg'
// import twitter from '../resources/twitter.svg'

export default class Porfile extends Component {
    render() {
        return (
            <div className="w-full flex justify-center items-start">
                <div className="flex justify-center items-start flex-col mb-3">
                    <div className="w-full">
                        <img src={photo} alt="user" className="mb-5 rounded" />
                    </div>
                    <div className="w-full flex justify-center items-start flex-col">
                        <div className="flex items-center">
                           <h1 className="text-4xl font-semibold font-serif">Name aaaa</h1> 
                        </div>
                        <p className="text-xl my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Link to="/user/edit" className="p-1 mt-2 border border-black rounded">Editar perfil</Link>
                        {/* <div className="flex justify-center items-center my-2">
                            <img src={instagram} alt="social" className="w-8 mx-2" />
                            <img src={facebook} alt="social" className="w-8 mx-2" />
                            <img src={github} alt="social" className="w-8 mx-2" />
                            <img src={youtube} alt="social" className="w-8 mx-2" />
                            <img src={spotify} alt="social" className="w-8 mx-2" />
                            <img src={twitter} alt="social" className="w-8 mx-2" />
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
