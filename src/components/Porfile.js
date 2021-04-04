import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { auth, store } from '../firebase'

import photo from '../resources/user.svg'

const Porfile = () => {

    const [modeEdit, setModeEdit] = useState(null)
    const [idUser, setIdUser] = useState('')

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')

    useEffect(async ()  => {
        
        auth.onAuthStateChanged((user) => {
            if (user) {
                setIdUser(user.uid)
                console.log(user.uid)
            }
            else {
                console.log('23-conectate')
            }
        })
        const getPorfile = async () => {
            
            await store.collection('artists').where('id', '==', idUser)
                .get()
                .then((querySnapshot) => {
                    console.log(querySnapshot)
                    querySnapshot.forEach((doc) => {
                        console.log(doc.data())
                        debugger
                        setName(doc.data().name)
                        setDescription(doc.data().description)
                        setLink(doc.data().link)
                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        }
        getPorfile()

    }, [])


    const editPorfile = async () => {

        setModeEdit(true)

    }

    const setPorfile = async (e) => {
        e.preventDefault()
        if (!name.trim()) {
            console.log('falta el nombre')
        }
        if (!description.trim()) {
            console.log('falta la fecha')
        }
        if (!link.trim()) {
            console.log('no tiene un link')
        }
        await store.collection('artists').doc(idUser).update({
            name: name,
            description: description,
            link: link
        })
        .then(() => {
            alert('update porfile')
        })
        .catch((e) => {
            console.error('error ' + e)
        })

        setModeEdit(false)

    }

    return (
        <div className="w-full flex justify-center items-start mt-5">
            <div className="w-3/5 flex justify-center items-center mb-3">
                <div className="w-72">
                    <img src={photo} alt="user" className="mb-5 rounded" />
                </div>
                <div className="w-1/2 flex justify-center items-start flex-col ml-6">
                    <div className="flex items-center">
                        {
                            modeEdit ?
                                (
                                    <div>
                                        <input
                                            value={name}
                                            onChange={(e) => { setName(e.target.value) }}
                                            placeholder="Nombre"
                                            autoComplete="off"
                                            className="
                                            w-full bg-gray-200 
                                            py-3 px-6 rounded-xl 
                                            text-xl font-medium 
                                            text-gray-800
                                            focus:outline-none"
                                        >
                                        </input>
                                        <textarea
                                            value={description}
                                            onChange={(e) => { setDescription(e.target.value) }}
                                            placeholder="Description"
                                            autoComplete="off"
                                            className="
                                            w-full my-3 bg-gray-200 
                                            py-3 px-6 rounded-xl 
                                            text-xl font-medium 
                                            text-gray-800
                                            focus:outline-none"
                                        >
                                        </textarea>
                                        <input
                                            value={link}
                                            onChange={(e) => { setLink(e.target.value) }}
                                            placeholder="Link"
                                            autoComplete="off"
                                            className="
                                            w-full bg-gray-200 
                                            py-3 px-6 rounded-xl 
                                            text-xl font-medium 
                                            text-gray-800
                                            focus:outline-none"
                                        >
                                        </input>
                                    </div>
                                )
                                :
                                (
                                    <div>
                                        <h1 className="text-4xl font-medium">{name}</h1>
                                        <p className="text-xl my-2">{description}</p>
                                        <a href={link} rel="noreferrer" target="_blank" className="text-xl my-2 underline">ver mas</a>
                                    </div>

                                )
                        }

                    </div>
                    {
                        modeEdit ?
                            (
                                <button onClick={setPorfile} className="p-1 mt-2 text-white bg-black rounded">Actualizar</button>

                            )
                            :
                            (

                                <button onClick={editPorfile} className="p-1 mt-2 border border-black rounded">Editar perfil</button>
                            )
                    }

                </div>
            </div>
        </div>
    )
}

export default Porfile
