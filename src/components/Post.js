import React, { Component } from 'react'

import post from '../resources/post.png'

export default class Post extends Component {
    render() {
        return (
            <div className="flex justify-center items-center bg-white shadow hover:shadow-md rounded-lg">
                <div className="w-1/2">
                   <img src={post} alt="Post" className="rounded-l-lg" /> 
                </div>
                <div className="w-1/2 flex justify-center items-start p-4 flex-col">
                    <h1 className="text-3xl font-bold my-1">Title of post</h1>
                    <p className="text-base font-serif">@createdby</p>
                    <p className="font-serif">date</p>
                </div>
            </div>
        )
    }
}
