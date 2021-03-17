import React, { Component } from 'react'

export default class AddPost extends Component {
    render() {
        return (
            <div className="flex justify-center items-center flex-col">
                <div className="w-full flex justify-start">
                    <h1 className="text-4xl font-medium"><i>Crear Post</i></h1>
                </div>
                <div className="w-2/3 flex justify-center items-center flex-col mt-10">
                    
                    <input className="w-full bg-gray-100 p-5 rounded text-2xl font-semibold my-5" />
                    
                    <div className="w-full flex min-h-70">
                        <div className="w-2/3 mr-5">
                            <div className="bg-gray-300 min-h-full rounded-lg flex justify-center items-center">
                                <p className="text-white font-medium text-2xl">Añadir una imagen</p>
                            </div>
                        </div>
                        <div className="w-1/3 flex justify-center items-center gap-5 flex-col">
                            <div className="bg-gray-300 w-full h-full rounded-lg flex justify-center items-center">
                                <p className="text-white font-medium text-2xl">Añadir una imagen</p>
                            </div>
                            <div className="bg-gray-300 w-full h-full rounded-lg flex justify-center items-center">
                                <p className="text-white font-medium text-2xl">Añadir una imagen</p>
                            </div>
                            <div className="bg-gray-300 w-full h-full rounded-lg flex justify-center items-center">
                                <p className="text-white font-medium text-2xl">Añadir una imagen</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        )
    }
}
