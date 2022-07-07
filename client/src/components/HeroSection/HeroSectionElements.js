import { FaArrowRight } from 'react-icons/fa';
import styled from "styled-components";
import {Link} from 'react-scroll';

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%
    height: 100%;
    z-index: -1;
`;

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    jistify-content: center;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    height: 800px;
    position: relative;
    z-index: 1;

`;
export const HeroContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Button = styled(Link)`
    border-radius: 50px;
    color: #fff;
    font-weight: lighter;
    background: #1cc9c9;
    white-space: nowarp;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    margin-top: 75px;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #000

    }
`;

export const ArrowRight = styled(FaArrowRight)`
    margin-left: 10px;
`;