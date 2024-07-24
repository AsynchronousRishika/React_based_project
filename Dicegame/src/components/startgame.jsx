import styled from "styled-components";
import { Button } from "./styled/Button";
const StartGame = ({toggle}) => {
  return (
    <>

      <Container>
        <div className="image">
          <img src="DICE.jpg" />
        </div>
        <div className="content">
          <h1>Dice Game</h1>
          <Button onClick={toggle} >PLAY GAME !</Button>
        </div>
      </Container>
    </>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  gap:20px;
  display: flex;
  margin: 0 auto;
  align-items: center;
 
  .image img{
  width:100%;
  height:100%;
  
  }

  .content {
    h1 {
     
      
      font-size: 96px;
      white-space: nowrap;
      position:realtive;
    }
     


      h1::before{
        content:"Dice Game";   
        width:0vh;        
        overflow:hidden;
        color:grey;        
        font-size:96px;
        white-space:nowrap;        
        left:829px;     
       
        position:absolute;
        transition:all 1.5s ease-in-out ;
        
        }
        h1:hover::before
        {        
          width:70vh;          
        }
       
  }
`;