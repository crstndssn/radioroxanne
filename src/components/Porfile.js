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
                <div className="w-3/4 flex justify-center items-start mt-5 mb-3">
                    <div className="w-1/4">
                        <img src={photo} alt="user" className="mb-5" />
                    </div>
                    <div className="w-2/4 p-6 flex justify-center items-start flex-col">
                        <div className="flex items-center">
                           <h1 className="text-4xl font-semibold font-serif">Name aaaa</h1> 
                           <Link to="/user/edit" className="p-1 mx-3 mt-2 border border-black">Editar perfil</Link>
                        </div>
                        
                        <p className="text-xl font-serif my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
