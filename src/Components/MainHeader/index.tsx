import React, {useMemo} from 'react';

import Toggle from './../Toggle';
import emoji from '../../utils/emojis';

import { Container, Profile, Welcome, UserName} from './styles'

const MainHeader: React.FC = () =>{

  const emojis = useMemo(()=>{
    const indice = Math.floor(Math.random() * emoji.length) 
    return emoji[indice]
  
  }, []);



  return (
    <Container>
       <Toggle />

      <Profile>
        <Welcome>Olá, {emojis}</Welcome>
        <UserName>Clebson Santos</UserName>
      </Profile>
    </Container>
  );
}

export default MainHeader;