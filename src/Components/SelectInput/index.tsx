import React from 'react';

import { Container } from './styles';

interface ISelectInputProsp {
  options: {
    value: string | number;
    label: string | number;
  }[],
}
const SelectInput: React.FC<ISelectInputProsp> = ({options}) => {
  return (
    <Container>
      <select>
        {
          options.map(option =>(
            <option key={option.value} value={option.value}>{option.label}</option>

          ))

        }

      </select>
    </Container>
  )
}

export default SelectInput;