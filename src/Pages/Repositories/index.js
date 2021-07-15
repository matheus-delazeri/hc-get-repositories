import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Respositories(){
    const [ repositories, setRepositories ] = useState([]);
    const history = useHistory();
    useEffect(() => {
        let repos = localStorage.getItem('repos');
        if(repos != null){
            repos = JSON.parse(repos);
            setRepositories(repos);
            localStorage.clear();
        }else{
            history.push('/');
        }
    }, []);
    return(
        <>
        <S.Container>
            <S.Title>Repositories ({ repositories.length })</S.Title>
            <S.List>
            { repositories.map(repo => {
                return (
                    <S.ListItem><S.LinkRepo href={ repo.svn_url } target="_blank">[ { repo.name } ]</S.LinkRepo> / Stars: { repo.stargazers_count } / Forks: { repo.forks }</S.ListItem>
                )
            }) }
            </S.List>
            <S.LinkHome to="/">Back</S.LinkHome>
        </S.Container>
        </>
    );
}
