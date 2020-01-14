import React, { Component } from 'react'
import "../Styles/Title.css"

interface Props { }
interface State { }

export default class Title extends Component<Props, State> {
    render() {
        return (
            <div className="Title">
                <h1>COLORFUL CALCULATOR</h1>
                <br />
                <h4>by Richard Liang</h4>
            </div>
        )
    }
}
