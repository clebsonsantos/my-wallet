import React from 'react';

 import { Container, TitleContainer, Controllers } from './styles';

const ContentHeader: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
       <h1>Title</h1>
      </TitleContainer>
      <Controllers>
          <button type="button">Botao A</button>
          <button type="button">Botão B</button>
      </Controllers>

    </Container>
  )
}

export default ContentHeader;