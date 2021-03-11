import React, { Component } from 'react'

import Post from '../components/Post'

export default class Posts extends Component {
    render() {
        return (
            <div className="grid grid-cols-3 gap-5 mt-7">
                <Post />
                <Post />
                <Post />
            </div>
        )
    }
}
