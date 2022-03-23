import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const Btn = (props) => {
  const { name, onClick } = props;
  return (
    <Button name={name} type="button" onClick={onClick}>
      {name}
    </Button>
  );
};

Btn.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Btn;
