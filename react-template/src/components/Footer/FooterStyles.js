import styled from 'styled-components';

export const Box = styled.div`
background: #4a4e69;
bottom: 0;
width: 100%;
font-family: 'Montserrat', sans-serif; 
padding: 50px 0px 50px 0px;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #f2e9e4;
margin-bottom: 5px;
font-size: 15px;
text-decoration: none;

&:hover {
	color: #e8dad5;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: #fff;
margin-bottom: 10px;
font-weight: bold;
`;