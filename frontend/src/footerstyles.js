// @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: "Poppins", sans-serif;
// }

// body {
//   display: flex;
//   background: #333;
//   justify-content: flex-end;
//   align-items: flex-end;
//   min-height: 100vh;
// }

// .footer {
//   position: relative;
//   width: 100%;
//   background: #3586ff;
//   min-height: 100px;
//   padding: 20px 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// }

// .social-icon,
// .menu {
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 10px 0;
//   flex-wrap: wrap;
// }

// .social-icon__item,
// .menu__item {
//   list-style: none;
// }

// .social-icon__link {
//   font-size: 2rem;
//   color: #fff;
//   margin: 0 10px;
//   display: inline-block;
//   transition: 0.5s;
// }
// .social-icon__link:hover {
//   transform: translateY(-10px);
// }

// .menu__link {
//   font-size: 1.2rem;
//   color: #fff;
//   margin: 0 10px;
//   display: inline-block;
//   transition: 0.5s;
//   text-decoration: none;
//   opacity: 0.75;
//   font-weight: 300;
// }

// .menu__link:hover {
//   opacity: 1;
// }

// .footer p {
//   color: #fff;
//   margin: 15px 0 10px 0;
//   font-size: 1rem;
//   font-weight: 300;
// }

// .wave {
//   position: absolute;
//   top: -100px;
//   left: 0;
//   width: 100%;
//   height: 100px;
//   background: url("https://i.ibb.co/wQZVxxk/wave.png");
//   background-size: 1000px 100px;
// }

// .wave#wave1 {
//   z-index: 1000;
//   opacity: 1;
//   bottom: 0;
//   animation: animateWaves 4s linear infinite;
// }

// .wave#wave2 {
//   z-index: 999;
//   opacity: 0.5;
//   bottom: 10px;
//   animation: animate 4s linear infinite !important;
// }

// .wave#wave3 {
//   z-index: 1000;
//   opacity: 0.2;
//   bottom: 15px;
//   animation: animateWaves 3s linear infinite;
// }

// .wave#wave4 {
//   z-index: 999;
//   opacity: 0.7;
//   bottom: 20px;
//   animation: animate 3s linear infinite;
// }

// @keyframes animateWaves {
//   0% {
//     background-position-x: 1000px;
//   }
//   100% {
//     background-positon-x: 0px;
//   }
// }

// @keyframes animate {
//   0% {
//     background-position-x: -1000px;
//   }
//   100% {
//     background-positon-x: 0px;
//   }
// }
import styled from 'styled-components';

export const Box = styled.div`

background: #002;
position: absolute;
bottom: -300px;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 100%;
	margin: 0 0  0 0 ;
	/* background: red; */
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
color: #fff;
margin-bottom: 0px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 20px;
font-weight: bold;
`;
