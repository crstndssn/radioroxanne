import React, { Component } from 'react'

import photo from '../resources/artist.png'

import instagram from '../resources/instagram.svg'
import facebook from '../resources/facebook-black.svg'
import github from '../resources/github.svg'
import youtube from '../resources/youtube.svg'
import spotify from '../resources/spotify.svg'
import twitter from '../resources/twitter.svg'

export default class Porfile extends Component {
    render() {
        return (
            <div className="w-1/4 flex justify-center items-start flex-col">
                <div>
                    <img src={photo} alt="user" className="w-full rounded-md mb-5" />
                </div>
                <div className="w-full flex justify-center items-start flex-col">
                    <h1 className="text-4xl font-semibold font-serif my-2">Name aaaa</h1>
                    <p className="text-xl font-serif my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="flex justify-center items-center my-2">
                        <img src={instagram} alt="social" className="w-8 mx-2" />
                        <img src={facebook} alt="social" className="w-8 mx-2" />
                        <img src={github} alt="social" className="w-8 mx-2" />
                        <img src={youtube} alt="social" className="w-8 mx-2" />
                        <img src={spotify} alt="social" className="w-8 mx-2" />
                        <img src={twitter} alt="social" className="w-8 mx-2" />
                    </div>
                </div>
            </div>
        )
    }
}
