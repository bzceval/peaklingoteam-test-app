import styled from "styled-components";

export const Section = styled.div`
width: 100%;
height: auto;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding: 0 50px;

@media screen and (max-width: 960px) {
  padding: 0 30px;
}
`;

export const Banner = styled.div`
font-family: 'Montserrat', sans-serif;
display: grid;
place-items: center;
margin-top: 50px; 
color: #4a4e69;
`;

export const Image = styled.img` 
width: 400px;
height: 400px;
overflow: auto;
resize: both; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
`;

export const Title = styled.h4`
background: 50% 100% / 50% 50% no-repeat radial-gradient(ellipse at bottom, #fff, transparent, transparent);
	 -webkit-background-clip: text;
	 background-clip: text;
	 color: #4a4e69;
	 font-size: 8vw; 
   text-align: center;
	 animation: reveal 3000ms ease-in-out forwards 200ms, glow 2500ms linear infinite 2000ms;

 @keyframes reveal {
	 80% {
		 letter-spacing: 4px;
	}
	 100% {
		 background-size: 300% 300%;
	}
}
 @keyframes glow {
	 40% {
		 text-shadow: 0 0 8px #fff;
	}
`;
