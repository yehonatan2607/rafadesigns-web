import styled from "styled-components";

export const AboutContainer = styled.div`

    position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
    height: auto;
	margin: 0px auto;
    background: #1E1E1E;
	z-index: 2;
`;

export const AboutWarpper = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	width: 1000px;
	margin-bottom: 75px;
	@media screen and (max-width: 1140px) {
		width: 100%;
		padding: 0px 25px;
    }
`;

export const RightContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 1140px) {
		align-items: center;
		text-align: center;
    }
`;

export const LeftContainer = styled.div`
	width: 100%;

	@media screen and (max-width: 1140px) {
        display: none;
    }
`;