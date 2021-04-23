import React, { useState, useEffect } from 'react'
import { store } from '../firebase'
import Artist from '../components/Artist.js'
import {Link} from 'react-router-dom'

import artist from '../resources/artist.png'

const Artists = () => {

    const [user, setUser] = useState([]);

    const getUser = async () => {
        const { docs } = await store.collection('artists').get()
        const arrayUsers = docs.map(item => ({id: item.id, ...item.data()}))
        console.log(arrayUsers)
        setUser(arrayUsers)
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <div className="grid grid-cols-4 gap-5">
            {
                user.map(item => (
                    <div>
                        <Link to={`/user`}>
                            <div className="imagen-artist">
                                <img src={artist} alt="artist" className="static z-01 rounded-lg shadow hover:shadow-md" />
                                <h1 className="text-2xl mx-1 font-base hover:font-bold">{item.name}</h1>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Artists
