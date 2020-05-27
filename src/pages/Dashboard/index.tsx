import React from 'react';

import logoImg from '../../assets/logo-app.svg';


import { Title, Form } from './styles';

const Dashboard: React.FC = () =>{
  return(
  <>
    <img src={logoImg} alt="github Explorer"/>
    <Title>Explore repositórios no Github </Title>

    <Form>
      <input placeholder="Digite onome do repositório"/>
      <button type="submit">Pesquisar</button>
    </Form>
  </>
  )

}


export default Dashboard;
