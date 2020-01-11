import React, { Component } from 'react'

/**
 * <OperatorButton/> is a button component that simulates an operator button
 * on a handheld calculator
 */

interface Props {
    key: String
    signIn: String
    cb: Function
}
interface State {
    sign: String
}

export default class OperatorButton extends Component<Props, State> {
    /* *************** CONSTRUCTOR *************** */
    constructor(props: Props) {
        super(props);
        this.state = {
            sign: this.props.signIn
        };
    }
    /* ********************************************** */

    /* *************** OTHER FUNCTIONS *************** */
    
    sendData = () => {
        this.props.cb(this.state.sign)
    }

    /* ********************************************** */

    /* *************** RENDER FUNCTION *************** */
    render() {
        return (
            <div>
                <button onClick={() => this.sendData()}>{this.state.sign}</button>
            </div>
        )
    }
    /* ********************************************** */
}
