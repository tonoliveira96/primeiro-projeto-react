import React, { useState,useEffect, FormEvent } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo-app.svg';

import { Title, Form, Repository, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepository] = useState<Repository[]>(()=>{
    const storageRepositories = localStorage.getItem('@githubExplorer:repositories');

    if(storageRepositories){
      return JSON.parse(storageRepositories);
    }else{
      return []
    }
  });

  useEffect(()=>{

  })

  //coloca os dados no storage
  useEffect(()=>{
    localStorage.setItem('@githubExplorer:repositories',JSON.stringify(repositories))
  })

  //FAZ A BUSCAR NA API
  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite o nome do autor/repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepository([...repositories, repository]);
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca do repositório');
    }
  }

  //inicia a renderização em tela
  return (
    <>
      <img src={logoImg} alt="github Explorer" />
      <Title>Explore repositórios no Github </Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite onome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repository>
        {repositories.map((repository) => (
          <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiArrowRight size={20} />
          </Link>
        ))}
      </Repository>
    </>
  );
};

export default Dashboard;
