import React from 'react';
import ContentHeader from '../../Components/ContentHeader'
import SelectInput from '../../Components/SelectInput'
import HistoryFinanceCard from '../../Components/HistoryFinanceCard'

import {Container, Content, Filters } from './style'
const List: React.FC = () =>{
  const months = [
    {value: 7, label: 'Julho'},
    { value: 8, label: 'Agosto'},
    { value: 9, label: 'Setembro'}

  ]
  const years = [
    {value: 2018, label: 2018},
    { value: 2019, label: 2019},
    { value: 2020, label: 2020}

  ]
  function handleFrequencyClick(information: string){
    return alert(information)
  }
  return (
    <>
      <Container>
        <ContentHeader title="Lista" lineColor="#c91919">
          <SelectInput options={months} />
          <SelectInput options={years} />
        </ContentHeader>
        <Filters>
          <button
            type="button"
            className={`
                    tag-filter 
                    tag-filter-recurrent
                    
                    `}
            // ${frequencyFilterSelected.includes('recorrente') && 'tag-actived'}
            onClick={() => handleFrequencyClick('recorrente')}
          >
            Recorrentes
          </button>

          <button
            type="button"
            className={`
                    tag-filter 
                    tag-filter-eventual
                    `}
            // ${frequencyFilterSelected.includes('eventual') && 'tag-actived'}
            onClick={() => handleFrequencyClick('eventual')}
          >
            Eventuais
          </button>
        </Filters>
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
        </Content>
      </Container>
    </>
  );
}

export default List;