import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    color: #000;
    font-family: sans-serif;

`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    margin-right: 0.1rem;
    border-radius: .25rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    background: #000;
    color: #fff;
    font-weight: bold;
    height: 1.5rem;
    border: 1px solid #ddd;
    border-radius: .25rem;
    cursor: pointer;

    &:hover {
        -webkit-transform: scale(1.05);
    }

`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.75rem;
    color: #ff0000;
    font-weight: 600;
    margin-top: 1rem;
`;