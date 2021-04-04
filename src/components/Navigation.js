import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'

const Navigation = () => {

    const history = useHistory();
    const [usuario, setUsuario] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUsuario(user)
                console.log(user.email)
            }
        })
    })

    const logout = () => {
        auth.signOut()
        setUsuario(null)
        history.push('/')
    }

    return (
        <div className="container mx-auto flex justify-between items-center py-7 absolute top-0 left-0 right-0 bg-transparent w-full">
            <div className="w-1/5 justify-start items-end">
                <Link to="/" className="logo text-3xl font-medium tracking-tight">
                    <span className="font-serif">Radio</span><br/>
                    <span className="font-serif font-bold">Roxanne</span>
                </Link>
            </div>
            <div className="w-3/5 flex justify-center items-center">
                <Link to="/artistas" className="text-xl font-medium font-serif tracking-tight mx-7">artistas</Link>
                <Link to="/tienda" className="text-xl font-medium font-serif tracking-tight mx-7">tienda</Link>
                <Link to="/blog" className="text-xl font-medium font-serif tracking-tight mx-7">blog</Link>
            </div>
            {
                usuario ?
                    (
                        <div className="w-1/5 flex justify-end items-center">
                            <button onClick={logout} className="text-xl text-black bg-transparent border border-black mx-2 py-1 px-2 font-serif rounded font-medium tracking-tight">logout</button>
                            <Link to="/user" className="text-xl text-white bg-black py-1 px-2 font-serif rounded font-medium tracking-tight">mi perfil</Link>
                        </div>
                    )
                    :
                    (
                        <div className="w-1/5 flex justify-end items-center">
                            <Link to="/conectate" className="text-xl text-white bg-black py-1 px-2 font-serif rounded font-medium tracking-tight">conéctate</Link>
                        </div>
                    )
            }

        </div>
    )
}

export default Navigation
