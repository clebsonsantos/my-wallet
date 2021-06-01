import React from 'react';
import ContentHeader from '../../Components/ContentHeader'
import SelectInput from '../../Components/SelectInput'


import {Container} from './style'
const Dashboard: React.FC = () =>{
  const options = [
    {value: 'Rodrigo', label: 'Rodrigo'},
    { value: 'Maria', label: 'Maria'},
    { value: 'Carlos', label: 'Carlos'}

  ]


  return (
  
    <Container>
      <ContentHeader title='Dashboard' lineColor="#f7931b">
        <SelectInput options={options}/>
      </ContentHeader>
    </Container>
  );
}

export default Dashboard;