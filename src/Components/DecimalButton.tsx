import React, { Component } from 'react'

/**
 * <DecimalButton/> is a button component that simulates a decimal point button
 * on a handheld calculator. In this program, pressing the decimal button does nothing
 * but change state to 4
 */

interface Props {
    cb: Function
}
interface State { }

export default class DecimalButton extends Component<Props, State> {
    /* *************** CONSTRUCTOR *************** */

    /* ********************************************** */

    /* *************** OTHER FUNCTIONS *************** */
    pressButton = () => {
        //this.setState({ currState: 4 }, this.sendData)
        this.props.cb()
    }

    /* ********************************************** */

    /* *************** RENDER FUNCTION *************** */
    render() {
        return (
            <div>
                <button onClick={() => this.pressButton()}>.</button>
            </div>
        )
    }
    /* ********************************************** */
}
