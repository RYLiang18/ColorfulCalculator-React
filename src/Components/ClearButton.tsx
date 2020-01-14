import React, { Component } from 'react'
import { Button } from "reactstrap";
import "../Styles/Button.css"

interface Props {
    cb: Function
}
interface State { }

export default class ClearButton extends Component<Props, State> {

    pressButton = () => {
        this.props.cb();
    }

    render() {
        return (
            <div className="Button">
                <Button
                    color="danger"
                    onClick={this.pressButton}
                    block
                >
                    C
                </Button>
            </div>
        )
    }
}
