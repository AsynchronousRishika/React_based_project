import { useState } from 'react';
import styled from "styled-components";

const NumberSelector = ({ selectedNumber,setSelectedNumber}) => {
    const arrnumber=[1,2,3,4,5,6]
    
    
  return (
    <>
  <Container>
  <div className='flex'>
  {arrnumber.map((value,i)=>( 
        <Box 
        isSelected={value == selectedNumber} key={i} onClick={()=>setSelectedNumber(value)}>{value}</Box>
        ))}
  </div>
  <p>
    Selected Number :{selectedNumber}
  </p>
   
  </Container>
    </>
  );
};

export default NumberSelector;

const Container=styled.div`

display:flex;
flex-direction:column;
align-items:end;
gap:15px;


.flex
{display:flex;
gap:20px;}
p{
font-weight:500;
font-size:18px;}
`
const Box=styled.div`
cursor:pointer;
height:72px;
width:72px;
border:2px solid black;
display:grid;
place-items:center;
font-size:24px;
font-weight:700;
background-color:${(props)=>(props.isSelected? "black": "white")};
color:${(props)=>( props.isSelected ? "white" :"black")};`