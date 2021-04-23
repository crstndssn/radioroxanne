import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth, googleProvider, store } from '../firebase'

import google from '../resources/google.svg'
import facebook from '../resources/facebook.svg'

const Login = () => {

    const [id, setId] = useState('');
    const [email, setEmail] = useState('');

    const loginGoogle = async e => {
        e.preventDefault();
        await auth
            .signInWithPopup(googleProvider)
            .then(result => {
                console.log(result.user.uid)
                setId(result.user.uid)
                setEmail(result.user.email)
                console.log(`el id: ${result.user.uid}`)
                console.log(`el email: ${email}`)
                createUser(result.user.uid, result.user.email)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const createUser = async (id, email) => {

        const artist = {
            id: id,
            email: email,
            name: 'Tu nombre',
            description: 'Una breve descripcion',
            link: 'Un link para ver mas'
        }

        try {
            const data = await store.collection('artists').doc(artist.id).set(artist)
            console.log('add-user')
            console.log(data)
        } catch (e) {
            console.log(e)
        }
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
