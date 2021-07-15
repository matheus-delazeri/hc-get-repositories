import axios from 'axios';
import React, { useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();
  const [ usuario, setUsuario] = useState('');
  const [ erro, setErro ] = useState(false);

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repos = [];
      repositories.map(repo => repos.push(repo));
      localStorage.setItem('repos', JSON.stringify(repos));
      setErro(false);
      history.push('/repositories');
    })
    .catch(err => {
      setErro(true);
    })
    ;
  }

  return (
    <S.HomeContainer>
      <S.Title>Get repositories from user</S.Title>
    <S.Content>
      <S.Input placeholder="GitHub user..." value={usuario} onChange={e => setUsuario(e.target.value)} 
        onFocus={input => input.target.placeholder = ""}
        onBlur={input => input.target.placeholder = "GitHub user..."}
      />
      <S.Button type="button" onClick={handlePesquisa}>Search</S.Button>
    </S.Content>
    { erro ? <S.ErrorMsg>Insert a valid GitHub user.</S.ErrorMsg> : ''}
    </S.HomeContainer>
  );
}

export default App;
