import React, { Component } from 'react'

import Artist from '../components/Artist.js'

export default class Artists extends Component {
    render() {
        return (
            <div className="grid grid-cols-4 gap-5">
                <Artist />
                <Artist />
                <Artist />
                <Artist />
            </div>
        )
    }
}
