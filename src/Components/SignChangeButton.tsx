import React, { Component } from 'react'

interface Props {
    cb: Function
}
interface State { }

export default class SignChangeButton extends Component<Props, State> {
    /* *************** OTHER FUNCTIONS *************** */

    pressButton = () => {
        this.props.cb()
    }

    /* ********************************************** */

    render() {
        return (
            <div>
                <button onClick={() => this.pressButton()}>+/-</button>
            </div>
        )
    }
}
