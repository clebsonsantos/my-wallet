import React, {useMemo, useState} from 'react';
import ContentHeader from '../../Components/ContentHeader'
import SelectInput from '../../Components/SelectInput'
import listOfMonths from '../../utils/months';


import {Container} from './style'
const Dashboard: React.FC = () =>{
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
        return {
            value: index + 1,
            label: month,
        }
    });
},[]);
const handleMonthSelected = (month: string) => {
  try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
  }
  catch{
      throw new Error('invalid month value. Is accept 0 - 24.')
  }
}


  return (
  
    <Container>
      <ContentHeader title='Dashboard' lineColor="#f7931b">
        <SelectInput options={months} onChange={(e) => handleMonthSelected(e.target.value)}/>
      </ContentHeader>
    </Container>
  );
}

export default Dashboard;