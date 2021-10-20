import React from 'react';
import { Table, Button } from 'reactstrap';
import './Calculator.css';
// import Calculate from '../logic/calculate';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // buttonName: 0,
    };
  }

  onChangeHandler = (event) => {
    console.log(event);

    // this.setState({ buttonName: event.target.name });
  };

  render() {
    return (
      <div>
        <p>
          Current Button:
          {/* {this.state.buttonName} */}
        </p>

        <Table bordered className="text-center table lead mx-auto">
          <tbody>
            <tr>
              <td
                className="bg-secondary text-light display-6 result"
                colSpan="4"
              >
                0
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
                  name="+/-<"
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
