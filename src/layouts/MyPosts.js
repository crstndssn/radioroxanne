import React, { Component } from 'react'

import MyPost from '../components/MyPost'

export default class MyPosts extends Component {
    render() {
        return (
            <div className="grid md:grid-cols-2 gap-3">
                <MyPost/>
                <MyPost/>
                <MyPost/>
                <MyPost/>
            </div>
        )
    }
}
