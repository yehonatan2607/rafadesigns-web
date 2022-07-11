import styled from "styled-components"
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index:99;
    width: 100%;
    height: 100%;
    background: rgba(13, 13, 13, .99);
    display:grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

    @media screen and (min-width: 769px){
        display: none;
    }

`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right:1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor:pointer;
    outline: none;
`;

export const SidebarWarpper = styled.div`
    color:#fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    trasition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color:#00ffff;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWarp = styled.div`
    display: flex;
    justify-content: center
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #23e1e1;
    white-space: nowarp;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    crsor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        trnasition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606; 
    }
`

