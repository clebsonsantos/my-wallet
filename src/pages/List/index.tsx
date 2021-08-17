import React from 'react';
import ContentHeader from '../../Components/ContentHeader'
import SelectInput from '../../Components/SelectInput'
import HistoryFinanceCard from '../../Components/HistoryFinanceCard'

import {Container, Content } from './style'
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
        <Content>
          <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de NetFlix"
          subtitle="17/08/2021"
          amount="R$ 27,50"

          />
          <HistoryFinanceCard
          tagColor="#e44ddd"
          title="Conta de Luz"
          subtitle="17/08/2021"
          amount="R$ 150,50"

          />
           <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de NetFlix"
          subtitle="17/08/2021"
          amount="R$ 27,50"

          />
          <HistoryFinanceCard
          tagColor="#e44ddd"
          title="Conta de Luz"
          subtitle="17/08/2021"
          amount="R$ 150,50"

          />
           <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de NetFlix"
          subtitle="17/08/2021"
          amount="R$ 27,50"

          />
          <HistoryFinanceCard
          tagColor="#e44ddd"
          title="Conta de Luz"
          subtitle="17/08/2021"
          amount="R$ 150,50"

          />
           <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de NetFlix"
          subtitle="17/08/2021"
          amount="R$ 27,50"

          />
          <HistoryFinanceCard
          tagColor="#e44ddd"
          title="Conta de Luz"
          subtitle="17/08/2021"
          amount="R$ 150,50"

          />
           <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de NetFlix"
          subtitle="17/08/2021"
          amount="R$ 27,50"

          />
          <HistoryFinanceCard
          tagColor="#e44ddd"
          title="Conta de Luz"
          subtitle="17/08/2021"
          amount="R$ 150,50"

          />
           <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de NetFlix"
          subtitle="17/08/2021"
          amount="R$ 27,50"

          />
          <HistoryFinanceCard
          tagColor="#e44ddd"
          title="Conta de Luz"
          subtitle="17/08/2021"
          amount="R$ 150,50"

          />
           <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de NetFlix"
          subtitle="17/08/2021"
          amount="R$ 27,50"

          />
          <HistoryFinanceCard
          tagColor="#e44ddd"
          title="Conta de Luz"
          subtitle="17/08/2021"
          amount="R$ 150,50"

          />
           <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de NetFlix"
          subtitle="17/08/2021"
          amount="R$ 27,50"

          />
          <HistoryFinanceCard
          tagColor="#e44ddd"
          title="Conta de Luz"
          subtitle="17/08/2021"
          amount="R$ 150,50"

          />
           <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de NetFlix"
          subtitle="17/08/2021"
          amount="R$ 27,50"

          />
          <HistoryFinanceCard
          tagColor="#e44ddd"
          title="Conta de Luz"
          subtitle="17/08/2021"
          amount="R$ 150,50"

          />
           <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de NetFlix"
          subtitle="17/08/2021"
          amount="R$ 27,50"

          />
          <HistoryFinanceCard
          tagColor="#e44ddd"
          title="Conta de Luz"
          subtitle="17/08/2021"
          amount="R$ 150,50"

          />
           <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de NetFlix"
          subtitle="17/08/2021"
          amount="R$ 27,50"

          />
          <HistoryFinanceCard
          tagColor="#e44ddd"
          title="Conta de Luz"
          subtitle="17/08/2021"
          amount="R$ 150,50"

          />
        </Content>
    </Container>
    </>
  );
}

export default List;