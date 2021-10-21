/** @format */

import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import './Calculator.css';
import Calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  onChangeHandler = (event) => {
    const buttonName = event.target.name;
    // eslint-disable-next-line
    console.log('state:' , this.state);
    // eslint-disable-next-line
    const something = Calculate(this.state, buttonName);
    // eslint-disable-next-line
    console.log(something);
    this.setState({ total: something.total, next: something.next, operation: something.operation });
  };

  render() {
    const { total } = this.state;
    const { next } = this.state;
    const { operation } = this.state;
    return (
      <div>
        <p>
          Total:
          {total}
        </p>
        <p>
          Next:
          {next}
        </p>
        <p>
          Operation:
          {operation}
        </p>
        <Table bordered className="text-center table lead mx-auto">
          <tbody>
            <tr>
              <td
                className="bg-secondary text-light display-6 result"
                colSpan="4"
              >
                {total}
              </td>
            </tr>
            <tr>
              <td className="bg-light py-3">
                <Button type="button" name="AC" onClick={this.onChangeHandler}>
                  AC
                </Button>
              </td>
              <td className="bg-light py-3">
                <Button
                  type="button"
                  name="+/-"
                  onClick={this.onChangeHandler}
                >
                  +/-
                </Button>
              </td>
              <td className="bg-light py-3">
                <Button type="button" name="%" onClick={this.onChangeHandler}>
                  %
                </Button>
              </td>
              <td className="bg-warning py-3">
                <Button type="button" name="÷" onClick={this.onChangeHandler}>
                  ÷
                </Button>
              </td>
            </tr>
            <tr>
              <td className="bg-light py-3">
                <Button type="button" name="7" onClick={this.onChangeHandler}>
                  7
                </Button>
              </td>
              <td className="bg-light py-3">
                <Button type="button" name="8" onClick={this.onChangeHandler}>
                  8
                </Button>
              </td>
              <td className="bg-light py-3">
                <Button type="button" name="9" onClick={this.onChangeHandler}>
                  9
                </Button>
              </td>
              <td className="bg-warning py-3">
                <Button type="button" name="x" onClick={this.onChangeHandler}>
                  x
                </Button>
              </td>
            </tr>
            <tr>
              <td className="bg-light py-3">
                <Button type="button" name="4" onClick={this.onChangeHandler}>
                  4
                </Button>
              </td>
              <td className="bg-light py-3">
                <Button type="button" name="5" onClick={this.onChangeHandler}>
                  5
                </Button>
              </td>
              <td className="bg-light py-3">
                <Button type="button" name="6" onClick={this.onChangeHandler}>
                  6
                </Button>
              </td>
              <td className="bg-warning py-3">
                <Button type="button" name="-" onClick={this.onChangeHandler}>
                  -
                </Button>
              </td>
            </tr>
            <tr>
              <td className="bg-light py-3">
                <Button type="button" name="1" onClick={this.onChangeHandler}>
                  1
                </Button>
              </td>
              <td className="bg-light py-3">
                <Button type="button" name="2" onClick={this.onChangeHandler}>
                  2
                </Button>
              </td>
              <td className="bg-light py-3">
                <Button type="button" name="3" onClick={this.onChangeHandler}>
                  3
                </Button>
              </td>
              <td className="bg-warning py-3">
                <Button type="button" name="+" onClick={this.onChangeHandler}>
                  +
                </Button>
              </td>
            </tr>
            <tr>
              <td className="bg-light py-3" colSpan="2">
                <Button type="button" name="0" onClick={this.onChangeHandler}>
                  0
                </Button>
              </td>
              <td className="bg-light py-3">
                <Button type="button" name="." onClick={this.onChangeHandler}>
                  .
                </Button>
              </td>
              <td className="bg-warning py-3">
                <Button type="button" name="=" onClick={this.onChangeHandler}>
                  =
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
