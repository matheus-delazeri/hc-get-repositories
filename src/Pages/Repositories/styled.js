import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 901px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 1.5em;
    font-family: sans-serif;
    margin-bottom: 1em;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
`;

export const ListItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
    border-radius: .5rem;
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 1rem auto;
    background-color: #000;
    color: #fff;
    padding: .3rem 0;
    text-decoration: none;
    border-radius: .25rem;

    &:hover{
        -webkit-transform: scale(1.05);
    }
`;
export const LinkRepo = styled.a`
    text-decoration: none;
    color: #fff;

    &:hover{
        font-size: 15px;
    }
`;