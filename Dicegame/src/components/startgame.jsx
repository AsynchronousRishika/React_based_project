import styled from "styled-components";

const Button = styled.button`
width:50%;
background:#000000;
color:white;
padding:10px 18px;
box-shadow:1px 1px 8px 1px grey,
-1px -1px 8px 1px grey inset;
border-radius:20px;
border:none;
font-weight:bold;


&:hover{
background-color:grey;
border:1px solid black;
color:black;
box-shadow:1px 1px 8px 1px black,
-1px -1px 8px 1px black inset;
transition:0.3s background-color ease-in-out;}


`
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
  border:2px solid red;
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
        transition:all 2.5s ease-in-out ;
        
        }
        h1:hover::before
        {        
          width:70vh;          
        }
       
  }
`;