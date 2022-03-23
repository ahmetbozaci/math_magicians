/* eslint-disable no-unused-vars */
/** @format */

import { useState } from 'react';
import { Table, Button, Container } from 'reactstrap';
import Calculate from '../logic/calculate';
import './Calculator.css';
import Btn from './Button';

const Calculator = () => {
  const [calculatorObj, setcalculatorObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const updateCalculatorcalculatorObj = (e) => {
    console.log(e);
    const buttonName = e.target.name;
    const calculatecalculatorObj = Calculate(calculatorObj, buttonName);
    setcalculatorObj(calculatecalculatorObj);
  };

  return (
    <Container className="d-flex justify-content-around">
      <h1> Lets do some math!</h1>

      <Table bordered className="text-center lead">
        <tbody>
          <tr>
            <td
              className="bg-secondary text-light display-6 result"
              colSpan="4"
            >
              {calculatorObj.total}
              {calculatorObj.operation}
              {calculatorObj.next}
            </td>
          </tr>
          <tr>
            <td className="bg-light py-3">
              <Btn name="AC" onClick={updateCalculatorcalculatorObj} />
            </td>
            <td className="bg-light py-3">
              <Btn name="+/-" onClick={updateCalculatorcalculatorObj} />
            </td>
            <td className="bg-light py-3">
              <Btn name="%" onClick={updateCalculatorcalculatorObj} />
            </td>
            <td className="bg-warning py-3">
              <Btn name="÷" onClick={updateCalculatorcalculatorObj} />
            </td>
          </tr>
          <tr>
            <td className="bg-light py-3">
              <Btn name="7" onClick={updateCalculatorcalculatorObj} />
            </td>
            <td className="bg-light py-3">
              <Btn name="8" onClick={updateCalculatorcalculatorObj} />
            </td>
            <td className="bg-light py-3">
              <Btn name="9" onClick={updateCalculatorcalculatorObj} />
            </td>
            <td className="bg-warning py-3">
              <Btn name="x" onClick={updateCalculatorcalculatorObj} />
            </td>
          </tr>
          <tr>
            <td className="bg-light py-3">
              <Btn name="4" onClick={updateCalculatorcalculatorObj} />
            </td>
            <td className="bg-light py-3">
              <Btn name="5" onClick={updateCalculatorcalculatorObj} />
            </td>
            <td className="bg-light py-3">
              <Btn name="6" onClick={updateCalculatorcalculatorObj} />
            </td>
            <td className="bg-warning py-3">
              <Btn name="-" onClick={updateCalculatorcalculatorObj} />
            </td>
          </tr>
          <tr>
            <td className="bg-light py-3">
              <Btn name="1" onClick={updateCalculatorcalculatorObj} />
            </td>
            <td className="bg-light py-3">
              <Btn name="2" onClick={updateCalculatorcalculatorObj} />
            </td>
            <td className="bg-light py-3">
              <Btn name="3" onClick={updateCalculatorcalculatorObj} />
            </td>
            <td className="bg-warning py-3">
              <Btn name="+" onClick={updateCalculatorcalculatorObj} />
            </td>
          </tr>
          <tr>
            <td className="bg-light py-3" colSpan="2">
              <Btn name="0" onClick={updateCalculatorcalculatorObj} />
            </td>
            <td className="bg-light py-3">
              <Btn name="." onClick={updateCalculatorcalculatorObj} />
            </td>
            <td className="bg-warning py-3">
              <Btn name="=" onClick={updateCalculatorcalculatorObj} />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Calculator;
