import styled from "styled-components";

export const ProductsList = styled.div`
	margin: auto;
	max-width: 1000px;
	> p,
	a {
		text-align: left;
		margin-left: 30px;
	}

	@media screen and (max-width: 800px) {
		> div > p {
			text-align: center;
			font-size: 24px;
		}
	}
`;

export const ProductCardStyled = styled.div`
	width: 1037px;
	height: 374px;
	border-color: 5px solid red;
	display: flex;
	flex-direction: row;
`;

export const TitleDivStyled = styled.div`
	display: flex;
	flex-direction: row;
`;

export const BottomContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const ContainerInfoStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

export const TopContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
