import React from 'react'
import TotalScores from './TotalScores'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import Rolldice from './Rolldice'
import { useState } from 'react'
const Gameplay = () => {
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);

    const [score, setScore] = useState(0);
    console.log(score);
    const generateRandomNumber = (min, max) => {

        return Math.floor(Math.random() * (max - min) + min);
    };

    const rollDice = () => {
        if(selectedNumber===0) return alert('Hey! Pal please Select Any Number');
        const randomnnumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomnnumber);
        if (selectedNumber === randomnnumber ) {
            setScore((prev) => prev + randomnnumber);
            
        }
        else {
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(0);
    };
    return (
        <>
            <MainContainer>
                <div className='top-section'>

                    <TotalScores score={score} />
                    <NumberSelector selectedNumber={selectedNumber}
                        setSelectedNumber={setSelectedNumber} />
                </div>

                <Rolldice currentDice={currentDice} rollDice={rollDice} />

            </MainContainer>

        </>
    )

}
export default Gameplay;

const MainContainer = styled.div`

padding-top:70px;

.top-section{
display:flex;
justify-content:space-around;
align-items:end;
}`
