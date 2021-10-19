/** @format */

import React from 'react';
import { Table } from 'reactstrap';
import './calculator.css';

export default class Calculator extends React.PureComponent {
  render() {
    return (
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
            <td className="bg-light py-3">AC</td>
            <td className="bg-light py-3">+/-</td>
            <td className="bg-light py-3">%</td>
            <td className="bg-warning py-3">÷</td>
          </tr>
          <tr>
            <td className="bg-light py-3">7</td>
            <td className="bg-light py-3">8</td>
            <td className="bg-light py-3">9</td>
            <td className="bg-warning py-3">x</td>
          </tr>
          <tr>
            <td className="bg-light py-3">4</td>
            <td className="bg-light py-3">5</td>
            <td className="bg-light py-3">6</td>
            <td className="bg-warning py-3">-</td>
          </tr>
          <tr>
            <td className="bg-light py-3">1</td>
            <td className="bg-light py-3">2</td>
            <td className="bg-light py-3">3</td>
            <td className="bg-warning py-3">+</td>
          </tr>
          <tr>
            <td className="bg-light py-3" colSpan="2">
              0
            </td>
            <td className="bg-light py-3">.</td>
            <td className="bg-warning py-3">=</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
