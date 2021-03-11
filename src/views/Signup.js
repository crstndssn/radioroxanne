import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import google from '../resources/google.svg'
import facebook from '../resources/facebook.svg'


export default class Signup extends Component {
    render() {
        return (
            <div className="w-full min-h-80 flex justify-center items-center">
                <div className="w-1/3">
                    <h1 className="text-6xl my-5">Registrate</h1>
                    <Link to="/user" className="flex justify-center items-center text-2xl border-2 border-black p-4 my-3">
                        <img className="w-6 mx-2" src={google} alt="google" />Google</Link>
                    <Link to="/user" className="flex justify-center items-center text-2xl bg-blue-900 text-white p-4 my-3">
                        <img className="w-7 mx-2" src={facebook} alt="google" />Facebook</Link>
                        <p className="text-lg my-5">Ya tienes una cuenta?  <Link className="underline text-lg" to="/signup">Ingresa</Link></p>
                </div>
            </div>
        )
    }
}
