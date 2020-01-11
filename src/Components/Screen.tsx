import React, { Component } from 'react'

interface Props {
    currNumIn: number;
    isNegativeIn: boolean;
}
interface State {
    currNum: number;
    isNegative: boolean;
    numToDisplay: string
}

export default class Screen extends Component<Props, State> {
    /* *************** CONSTRUCTOR *************** */
    constructor(props: Props) {
        super(props);
        this.state = {
            currNum: this.props.currNumIn,
            isNegative: this.props.isNegativeIn,
            numToDisplay: "0"
        };
    }
    /* ********************************************** */
    /* *************** OTHER FUNCTIONS *************** */

    componentDidUpdate = () => {
        if (this.state.currNum !== this.props.currNumIn) {
            if (!this.state.isNegative) {
                this.setState({
                    currNum: this.props.currNumIn,
                    numToDisplay: this.props.currNumIn.toString()
                })
            } else {
                this.setState({
                    currNum: this.props.currNumIn,
                    numToDisplay: "-" + this.props.currNumIn.toString()
                })
            }
        }


        if (this.state.isNegative !== this.props.isNegativeIn) {
            if (this.props.isNegativeIn) {
                this.setState({
                    numToDisplay: "-" + this.state.numToDisplay,
                    isNegative: this.props.isNegativeIn
                })
            } else {
                this.setState({
                    numToDisplay: this.state.numToDisplay.substring(1),
                    isNegative: this.props.isNegativeIn
                })
            }
        }
    }

    /* ********************************************** */

    /* *************** RENDER FUNCTION *************** */
    render() {
        return (
            <div>
                {this.state.numToDisplay}
            </div>
        )
    }
    /* ********************************************** */
}
