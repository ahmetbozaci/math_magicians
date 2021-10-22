import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import Calculate from '../logic/calculate';
import './Calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  setCalculatorObj = (event) => {
    const buttonName = event.target.name;
    const calculatorObj = this.state;
    const newCalculatorObj = Calculate(calculatorObj, buttonName);

    this.setState({
      total: newCalculatorObj.total,
      next: newCalculatorObj.next,
      operation: newCalculatorObj.operation,
    });
  };

  render() {
    const { total } = this.state;
    const { next } = this.state;
    const { operation } = this.state;
    return (
      <Table bordered className="text-center table lead mx-auto">
        <tbody>
          <tr>
            <td
              className="bg-secondary text-light display-6 result"
              colSpan="4"
            >
              {total}
              {operation}
              {next}
            </td>
          </tr>
          <tr>
            <td className="bg-light py-3">
              <Button type="button" name="AC" onClick={this.setCalculatorObj}>
                AC
              </Button>
            </td>
            <td className="bg-light py-3">
              <Button type="button" name="+/-" onClick={this.setCalculatorObj}>
                +/-
              </Button>
            </td>
            <td className="bg-light py-3">
              <Button type="button" name="%" onClick={this.setCalculatorObj}>
                %
              </Button>
            </td>
            <td className="bg-warning py-3">
              <Button type="button" name="÷" onClick={this.setCalculatorObj}>
                ÷
              </Button>
            </td>
          </tr>
          <tr>
            <td className="bg-light py-3">
              <Button type="button" name="7" onClick={this.setCalculatorObj}>
                7
              </Button>
            </td>
            <td className="bg-light py-3">
              <Button type="button" name="8" onClick={this.setCalculatorObj}>
                8
              </Button>
            </td>
            <td className="bg-light py-3">
              <Button type="button" name="9" onClick={this.setCalculatorObj}>
                9
              </Button>
            </td>
            <td className="bg-warning py-3">
              <Button type="button" name="x" onClick={this.setCalculatorObj}>
                x
              </Button>
            </td>
          </tr>
          <tr>
            <td className="bg-light py-3">
              <Button type="button" name="4" onClick={this.setCalculatorObj}>
                4
              </Button>
            </td>
            <td className="bg-light py-3">
              <Button type="button" name="5" onClick={this.setCalculatorObj}>
                5
              </Button>
            </td>
            <td className="bg-light py-3">
              <Button type="button" name="6" onClick={this.setCalculatorObj}>
                6
              </Button>
            </td>
            <td className="bg-warning py-3">
              <Button type="button" name="-" onClick={this.setCalculatorObj}>
                -
              </Button>
            </td>
          </tr>
          <tr>
            <td className="bg-light py-3">
              <Button type="button" name="1" onClick={this.setCalculatorObj}>
                1
              </Button>
            </td>
            <td className="bg-light py-3">
              <Button type="button" name="2" onClick={this.setCalculatorObj}>
                2
              </Button>
            </td>
            <td className="bg-light py-3">
              <Button type="button" name="3" onClick={this.setCalculatorObj}>
                3
              </Button>
            </td>
            <td className="bg-warning py-3">
              <Button type="button" name="+" onClick={this.setCalculatorObj}>
                +
              </Button>
            </td>
          </tr>
          <tr>
            <td className="bg-light py-3" colSpan="2">
              <Button type="button" name="0" onClick={this.setCalculatorObj}>
                0
              </Button>
            </td>
            <td className="bg-light py-3">
              <Button type="button" name="." onClick={this.setCalculatorObj}>
                .
              </Button>
            </td>
            <td className="bg-warning py-3">
              <Button type="button" name="=" onClick={this.setCalculatorObj}>
                =
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
