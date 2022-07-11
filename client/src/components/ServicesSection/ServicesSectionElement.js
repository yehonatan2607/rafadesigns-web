import styled from "styled-components";

export const ServicesContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    margin: 0px auto;
    background: #ccc;
    z-index: 3;
`;

export const ServicesWarp = styled.div`
    margin-bottom: 75px;
    grid-template-columns: repeat(3, 350px);
    display: grid;
    column-gap: 50px;
    row-gap: 30px;

    @media only screen and (min-width: 800px) and (max-width: 1200px) {
		grid-template-columns: repeat(2, 350px);
        display: grid;
        column-gap: 40px;
        row-gap: 20px;
    }
    @media only screen and (max-width: 799px) {
        grid-template-columns: repeat(1, 350px);
        display: grid;
        column-gap: 40px;
        row-gap: 20px;
    }
`;

export const ItemContainer = styled.div`
    height: 275px;
    width: 350px;
    background: #111111;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0px 12px;
    color: white;
    border-radius: 10px;
    transition: 1.2s;
`;

export const Line = styled.div`
    margin-top: 25px;
    width: 100px;
    height: 2px;
    border-radius: 50px;
    background: #00ffff;
    transition: 1.2s;
`;