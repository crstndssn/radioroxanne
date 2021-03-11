import React, { Component } from 'react'

import post from '../resources/post.png'

export default class Post extends Component {
    render() {
        return (
            <div className="flex justify-center items-center p-2 border-2 border-black">
                <div className="w-1/2">
                   <img src={post} alt="Post" /> 
                </div>
                <div className="w-1/2 flex justify-center items-start p-4 flex-col">
                    <h1 className="text-2xl font-bold my-1">Title of post</h1>
                    <p className="text-xl font-serif">@createdby</p>
                    <p className="font-serif my-1">date</p>
                </div>
            </div>
        )
    }
}
