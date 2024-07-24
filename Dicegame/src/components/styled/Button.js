
import styled from "styled-components";

export  const Button = styled.button`
width:50%;
background:#000000;
color:white;
padding:10px 18px;
box-shadow:1px 1px 3px 4px grey,
-1px -1px 8px 1px grey inset;
border-radius:20px;
border:none;
font-weight:bold;


&:hover{
background-color:white;

color:black;
box-shadow:1px 1px 8px 1px black,
-1px -1px 8px 1px black inset;
transition:0.3s background-color ease-in-out;}


`;
 export const OutlineButton=styled(Button)`
background-color:white;
color:black;

&:hover{
background-color:black;

color:white;
box-shadow:1px 1px 8px 1px black,
-1px -1px 8px 1px black inset;
transition:0.3s background-color ease-in-out;}

`;