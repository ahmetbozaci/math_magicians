import { useState } from 'react';
import { Table, Button } from 'reactstrap';
import Calculate from '../logic/calculate';
import './Calculator.css';

function Calculator() {
  const [calculatorObj, setcalculatorObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const updateCalculatorcalculatorObj = (e) => {
    const buttonName = e.target.name;
    const calculatecalculatorObj = Calculate(calculatorObj, buttonName);
    setcalculatorObj(calculatecalculatorObj);
  };

  return (
    <Table bordered className="text-center table lead mx-auto">
      <tbody>
        <tr>
          <td className="bg-secondary text-light display-6 result" colSpan="4">
            {calculatorObj.total}
            {calculatorObj.operation}
            {calculatorObj.next}
          </td>
        </tr>
        <tr>
          <td className="bg-light py-3">
            <Button
              type="button"
              name="AC"
              onClick={updateCalculatorcalculatorObj}
            >
              AC
            </Button>
          </td>
          <td className="bg-light py-3">
            <Button
              type="button"
              name="+/-"
              onClick={updateCalculatorcalculatorObj}
            >
              +/-
            </Button>
          </td>
          <td className="bg-light py-3">
            <Button
              type="button"
              name="%"
              onClick={updateCalculatorcalculatorObj}
            >
              %
            </Button>
          </td>
          <td className="bg-warning py-3">
            <Button
              type="button"
              name="÷"
              onClick={updateCalculatorcalculatorObj}
            >
              ÷
            </Button>
          </td>
        </tr>
        <tr>
          <td className="bg-light py-3">
            <Button
              type="button"
              name="7"
              onClick={updateCalculatorcalculatorObj}
            >
              7
            </Button>
          </td>
          <td className="bg-light py-3">
            <Button
              type="button"
              name="8"
              onClick={updateCalculatorcalculatorObj}
            >
              8
            </Button>
          </td>
          <td className="bg-light py-3">
            <Button
              type="button"
              name="9"
              onClick={updateCalculatorcalculatorObj}
            >
              9
            </Button>
          </td>
          <td className="bg-warning py-3">
            <Button
              type="button"
              name="x"
              onClick={updateCalculatorcalculatorObj}
            >
              x
            </Button>
          </td>
        </tr>
        <tr>
          <td className="bg-light py-3">
            <Button
              type="button"
              name="4"
              onClick={updateCalculatorcalculatorObj}
            >
              4
            </Button>
          </td>
          <td className="bg-light py-3">
            <Button
              type="button"
              name="5"
              onClick={updateCalculatorcalculatorObj}
            >
              5
            </Button>
          </td>
          <td className="bg-light py-3">
            <Button
              type="button"
              name="6"
              onClick={updateCalculatorcalculatorObj}
            >
              6
            </Button>
          </td>
          <td className="bg-warning py-3">
            <Button
              type="button"
              name="-"
              onClick={updateCalculatorcalculatorObj}
            >
              -
            </Button>
          </td>
        </tr>
        <tr>
          <td className="bg-light py-3">
            <Button
              type="button"
              name="1"
              onClick={updateCalculatorcalculatorObj}
            >
              1
            </Button>
          </td>
          <td className="bg-light py-3">
            <Button
              type="button"
              name="2"
              onClick={updateCalculatorcalculatorObj}
            >
              2
            </Button>
          </td>
          <td className="bg-light py-3">
            <Button
              type="button"
              name="3"
              onClick={updateCalculatorcalculatorObj}
            >
              3
            </Button>
          </td>
          <td className="bg-warning py-3">
            <Button
              type="button"
              name="+"
              onClick={updateCalculatorcalculatorObj}
            >
              +
            </Button>
          </td>
        </tr>
        <tr>
          <td className="bg-light py-3" colSpan="2">
            <Button
              type="button"
              name="0"
              onClick={updateCalculatorcalculatorObj}
            >
              0
            </Button>
          </td>
          <td className="bg-light py-3">
            <Button
              type="button"
              name="."
              onClick={updateCalculatorcalculatorObj}
            >
              .
            </Button>
          </td>
          <td className="bg-warning py-3">
            <Button
              type="button"
              name="="
              onClick={updateCalculatorcalculatorObj}
            >
              =
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Calculator;
