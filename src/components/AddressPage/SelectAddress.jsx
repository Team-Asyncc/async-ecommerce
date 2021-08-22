import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import AddressCard from './AddressCard';

const GreenRadio = withStyles({
  root: {
    color: pink[300],
    '&$checked': {
      color: pink[500],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function SelectAddress({ availableAddress, openModal }) {
  const [selectedValue, setSelectedValue] = React.useState(0);

  const handleChange = (event) => {
    setSelectedValue(parseInt(event.target.value));
  };

  return (
    <div>
      {availableAddress.map((storedAddress, idx) => {
        return (
          <div className="relative space-y-2" key={idx}>
            <GreenRadio
              style={{ position: 'absolute', left: '1px', top: '6px' }}
              checked={selectedValue === idx}
              onChange={handleChange}
              value={idx}
              name="radio-button-demo"
              inputProps={{ 'aria-label': idx }}
            />
            <AddressCard
              storedAddress={storedAddress}
              idx={idx}
              openModal={openModal}
            />
          </div>
        );
      })}
    </div>
  );
}
