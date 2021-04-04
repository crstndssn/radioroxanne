import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { auth, googleProvider  } from '../firebase'

import google from '../resources/google.svg'
import facebook from '../resources/facebook.svg'

const Login = () => {

    const loginGoogle = async e => {
        e.preventDefault();
        await auth
                .signInWithPopup(googleProvider)
                .then(result => {
                    console.log(result)
                })
                .catch((error) => {
                    console.log(error)
                })
    }

    return (
        <div className="w-full min-h-80 flex justify-center items-center">
            <div className="w-1/3">
                <h1 className="text-5xl font-serif my-5"><i>Conéctate</i></h1>
                <button onClick={loginGoogle} className="w-full flex justify-center items-center rounded font-serif text-2xl border-2 border-black p-3 my-3">
                    <img className="w-6 mx-2" src={google} alt="google" />Google</button>
                <button to="/user" className="w-full flex justify-center items-center rounded font-serif text-2xl bg-blue-900 text-white p-3 my-3">
                    <img className="w-7 mx-2" src={facebook} alt="google" />Facebook</button>
                <p className="text-lg my-5">No tienes una cuenta?  <Link className="underline text-lg" to="/signup">Registrate</Link></p>
            </div>
        </div>
    )
}

export default Login
