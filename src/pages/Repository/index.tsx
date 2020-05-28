import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import logoImg from '../../assets/logo-app.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/dashboard">
          <FiArrowLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars3.githubusercontent.com/u/69631" alt="" />
          <div>
            <strong>Repositório</strong>
            <p>piriri pororo</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link
          to={`/repositories`}
        >
          <div>
            <strong>hihiihi</strong>
            <p>kkkkkkkkkkk</p>
          </div>
          <FiArrowRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
