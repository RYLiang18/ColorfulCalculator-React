import React, { Component } from 'react'
import "../Styles/Button.css"

interface Props {
    currNumIn: number;
    isNegativeIn: boolean;
    currStateIn: number;
    resultIn: number;
}
interface State {
    currNum: number;
    isNegative: boolean;
    numToDisplay: string;
    result: number;
}

export default class Screen extends Component<Props, State> {
    static temp: boolean = true; //I'm lazy so I just did a quick and easy solution :/
    /* *************** CONSTRUCTOR *************** */
    constructor(props: Props) {
        super(props);
        this.state = {
            currNum: this.props.currNumIn,
            isNegative: this.props.isNegativeIn,
            numToDisplay: "0",
            result: this.props.resultIn
        };
    }
    /* ********************************************** */
    /* *************** OTHER FUNCTIONS *************** */
    componentDidUpdate = () => {
        if (this.state.result !== this.props.resultIn) {
            this.setState({
                result: this.props.resultIn
            });
        }

        if (this.props.currStateIn === 1 && Screen.temp) {
            this.setState({ numToDisplay: this.state.result.toString() });
            Screen.temp = false;
        } else if (this.props.currStateIn !== 3) {
            this.display();
            Screen.temp = true;
        } else {
            this.display_state3();
            Screen.temp = true;
        }
    }

    /* ********************************************** */

    /* *************** OTHER FUNCTIONS *************** */

    display = () => {
        if (this.state.currNum !== this.props.currNumIn) {
            this.setState({
                currNum: this.props.currNumIn,
                numToDisplay: this.props.currNumIn.toString()
            })
        }

        if (this.state.isNegative !== this.props.isNegativeIn) {
            if (this.props.isNegativeIn) {
                this.setState({
                    numToDisplay: "-" + this.state.numToDisplay,
                    isNegative: this.props.isNegativeIn
                });
            } else {
                this.setState({
                    numToDisplay: this.state.numToDisplay.substring(1),
                    isNegative: this.props.isNegativeIn
                });
            }
        }
    }

    display_state3 = () => {
        if (this.state.result !== this.props.resultIn) {
            this.setState({
                result: this.props.resultIn,
                numToDisplay: this.props.resultIn.toString()
            });
        }
    }

    randomAlertColor() {
        var colors: Array<string> = ["primary", "secondary", "success", "info", "warning", "danger"];
        var rng: number = Math.floor((Math.random() * 5));
        return colors[rng];
    }

    /* ********************************************** */

    /* *************** RENDER FUNCTION *************** */
    render() {
        return (
            <div className="Screen">
                <h1>
                    {this.state.numToDisplay}
                </h1>

                {/*<Alert
                    color={this.randomAlertColor()}
                >
                    {this.state.numToDisplay}
                </Alert>*/}
            </div>
        )
    }
    /* ********************************************** */
}
