import React, { Component } from "react";
import NumericButton from "./NumericButton";
import "../Styles/NumericButtons.css"

/**
 * <NumericButtons/> is a component that displays <NumericButton/> components from 9-10. 
 */

interface Props {
  cb: Function
  currNumIn: number
  currStateIn: number
  numDecimalPoinsIn: number;
}
interface State {
  numbers: Array<number>;
}

export default class NumericButtons extends Component<Props, State> {
  /* *************** CONSTRUCTOR *************** */
  constructor(props: Props) {
    super(props);
    this.state = {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }
  /* ********************************************** */

  /* *************** OTHER FUNCTIONS *************** */

  sendData = (newCurrNum: number, newCurrState: number, newNumDecimalPoints: number) => {
    this.props.cb(newCurrNum, newCurrState, newNumDecimalPoints);
  }

  /* ********************************************** */

  /* *************** RENDER FUNCTION *************** */
  render() {
    var buttons = this.state.numbers.map(number => (
      <NumericButton
        valueIn={number}
        cb={this.sendData}
        key={number.toString()}
        currNumIn={this.props.currNumIn}
        currStateIn={this.props.currStateIn}
        numDecimalPointsIn={this.props.numDecimalPoinsIn}
      />
    ));

    return (
      <div>
        <div className='rowA'>{buttons[7]} {buttons[8]} {buttons[9]}</div>
        <div className='rowB'>{buttons[4]} {buttons[5]} {buttons[6]}</div>
        <div className='rowC'>{buttons[1]} {buttons[2]} {buttons[3]}</div>
        <div className='rowD'>{buttons[0]}</div>
      </div>
    );
  }
  /* ********************************************** */
}
