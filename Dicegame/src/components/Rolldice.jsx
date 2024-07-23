import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
width:25%;

background:#333;
color:white;
padding:10px 18px;
box-shadow:1px 1px 8px 1px grey,
-1px -1px 8px 1px grey inset;
border-radius:20px;
border:none;
font-weight:bold;


&:hover{
background-color:lightblue;
border:1px solid black;
color:grey;
box-shadow:1px 1px 8px 1px black,
-1px -1px 8px 1px black inset;
transition:0.3s background-color ease-in-out;}`

const  Rolldice = ({currentDice,rollDice}) => {

    
    


  return (
    <RolldiceContainer>
       <div className='dice' onClick={rollDice}>
        <img src={`/dice/dice_${currentDice}.png`} alt="dice" />
       </div>
       <Button>Click on Dice to roll</Button>
    </RolldiceContainer>
  )
}

export default Rolldice;


const RolldiceContainer=styled.div`
 display:flex;

 align-items:center;
 flex-direction:column;
  margin-top:48px;
  
  
  .dice{
  cursor:pointer; 
  }
  
`;