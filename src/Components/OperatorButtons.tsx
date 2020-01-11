import React, { Component } from 'react'
import OperatorButton from './OperatorButton'

interface Props {
    cb: Function
}
interface State {
    signs: Array<String>;
}

export default class OperatorButtons extends Component<Props, State> {
    /* *************** CONSTRUCTOR *************** */
    constructor(props: Props) {
        super(props);
        this.state = {
            signs: ["+", "-", "*", "/"]
        };
    }
    /* ********************************************** */

    /* *************** OTHER FUNCTIONS *************** */

    sendData = (childData: number) => {
        this.props.cb(childData);
    }

    /* ********************************************** */

    /* *************** RENDER FUNCTION *************** */
    render() {
        var buttons = this.state.signs.map(sign => (
            <OperatorButton
                signIn={sign}
                cb={this.sendData}
                key={sign.toString()}
            />
        ));

        return (
            <div>
                {buttons}
            </div>
        )
    }
    /* ********************************************** */
}
