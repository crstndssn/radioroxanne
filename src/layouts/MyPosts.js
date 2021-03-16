import React, { Component } from 'react'

import AddPost from '../components/AddPost'
import MyPost from '../components/MyPost'

export default class MyPosts extends Component {
    render() {
        return (
            <div className="grid grid-cols-2 gap-3">
                <AddPost/>
                <MyPost/>
                <MyPost/>
                <MyPost/>
                <MyPost/>
            </div>
        )
    }
}
