import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../../assets/logo-app.svg';


import { Title, Form, Repository } from './styles';

const Dashboard: React.FC = () =>{
  return(
  <>
    <img src={logoImg} alt="github Explorer"/>
    <Title>Explore repositórios no Github </Title>

    <Form>
      <input placeholder="Digite onome do repositório"/>
      <button type="submit">Pesquisar</button>
    </Form>

    <Repository>
      <a href="teste">
        <img src="https://avatars1.githubusercontent.com/u/43159625?s=460&u=08567372edcab56e9f803be46ed3adb47a4843f5" alt="Everton"/>
        <div>
          <strong>Everton Form</strong>
          <p>
            Piriri pororo
          </p>
        </div>
        <FiArrowRight size={20} />
      </a>
      <a href="teste">
        <img src="https://avatars1.githubusercontent.com/u/43159625?s=460&u=08567372edcab56e9f803be46ed3adb47a4843f5" alt="Everton"/>
        <div>
          <strong>Everton Form</strong>
          <p>
            Piriri pororo
          </p>
        </div>
        <FiArrowRight size={20} />
      </a>
    </Repository>

  </>
  )

}


export default Dashboard;
