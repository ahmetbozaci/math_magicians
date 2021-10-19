/** @format */

import React from 'react';
import { Table } from 'reactstrap';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <Table bordered className="mx-auto w-25 text-center">
        <tbody>
          <tr>
            <td className="bg-secondary text-" colSpan="4">Result</td>
          </tr>
          <tr>
            <td className="bg-light">AC</td>
            <td className="bg-light">+/-</td>
            <td className="bg-light">%</td>
            <td className="bg-warning">÷</td>
          </tr>
          <tr>
            <td className="bg-light">7</td>
            <td className="bg-light">8</td>
            <td className="bg-light">9</td>
            <td className="bg-warning">x</td>
          </tr>
          <tr>
            <td className="bg-light">4</td>
            <td className="bg-light">5</td>
            <td className="bg-light">6</td>
            <td className="bg-warning">-</td>
          </tr>
          <tr>
            <td className="bg-light">1</td>
            <td className="bg-light">2</td>
            <td className="bg-light">3</td>
            <td className="bg-warning">+</td>
          </tr>
          <tr>
            <td className="bg-light" colSpan="2">0</td>
            <td className="bg-light">.</td>
            <td className="bg-warning">=</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
