import React from 'react'
import styled from 'styled-components'
export const Rules = () => {
  return (
    <RulesContainer>

        <h2> How to play Dice Game ?</h2>
        <div className='text'>

        <p>1. Roll the dice and get the points.</p>
        <p>2. If you get matched with selected Number, you will get  points equals to selected Number.</p>    
        <p>3. If you don't matched, your points will get deducted by -2</p>
         <p>Click Reset Score button to start new game from 0 as a total score</p>
        </div>

    </RulesContainer>
  )
}

const RulesContainer = styled.div`
background-color:#fbabf2;
margin:0 auto;
margin-top:20px;
border-radius:10px;
max-width:500px;
padding: 20px;
h2{
font size:22px;

}
.text{
margin-top:24px;
}



`
