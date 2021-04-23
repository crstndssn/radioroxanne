import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { store } from '../firebase'
import artist from '../resources/artist.png'

const Artist = () => {

    const [user, setUser] = useState('');

    const getUser = () => {
         store.collection('artists').get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.data())
                    setUser(doc.data())
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
       getUser();
    }, [])


    return (
        <Link to="/{user}" className="static">
            <div className="imagen-artist">
                <img src={artist} alt="artist" className="static z-01 rounded-lg shadow hover:shadow-md" />
                <h1 className="text-2xl mx-1 font-base hover:font-bold">{user.name}</h1>
            </div>
        </Link>
    )

}

export default Artist

