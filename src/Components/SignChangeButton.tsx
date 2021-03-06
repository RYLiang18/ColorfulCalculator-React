import React, { Component } from 'react'
import { Button } from "reactstrap"
import "../Styles/Button.css"

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
            <div className="Button">
                <Button
                    onClick={() => this.pressButton()}
                    color="primary"
                    block
                >
                    +/-
                </Button>
            </div>
        )
    }
}
