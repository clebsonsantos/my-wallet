import React from 'react';
import ContentHeader from '../../Components/ContentHeader'
import SelectInput from '../../Components/SelectInput'

import {Container } from './style'
const List: React.FC = () =>{
  const options = [
    {value: 'Rodrigo', label: 'Rodrigo'},
    { value: 'Maria', label: 'Maria'},
    { value: 'Carlos', label: 'Carlos'}

  ]

  return (
    <>
    <Container>
    <ContentHeader title='Lista' lineColor="#c91919">
      <SelectInput options={options}/>
    </ContentHeader>
    </Container>
    </>
  );
}

export default List;