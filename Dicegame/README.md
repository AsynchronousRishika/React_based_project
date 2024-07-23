DICE GAME

1. npm install styled-components
installed styles component ij in this project

definition : "styled-components is the result of wondering how we could enhance CSS for styling React component systems. By focusing on a single use case we managed to optimize the experience for developers as well as the output for end users."

2. drop-shadow:(offset-x,offset-y,blure-radius,spread-radius,color);
it gives shadow effect on element


3. import styled from 'styled-components';



styles-component in  react explainn in simple terms

ChatGPT

Sure! Styled-components is a popular library for styling React applications using a technique called "CSS-in-JS". It allows you to write plain CSS within your JavaScript files and provides a more dynamic and scoped way to apply styles. Here’s an explanation in simple terms:

What are Styled-components?
Styled-components let you write CSS directly in your JavaScript files. These styles are scoped to individual components, meaning they won't leak and affect other parts of your application. This helps keep your styles organized and maintainable.

Why Use Styled-components?
Scoped Styles: Styles are scoped to components, preventing unintended side effects.
Dynamic Styles: Easily use JavaScript to calculate styles based on props or state.
CSS Syntax: Write actual CSS, not JavaScript objects representing styles.
Reusability: Create reusable styled components.
How to Use Styled-components
Install Styled-components:

First, you need to install the library. You can do this using npm or yarn.
bash
Copy code
npm install styled-components
or

bash
Copy code
yarn add styled-components
Create Styled-components:

You create styled components by using the styled function provided by the library.
Here's a simple example to illustrate how it works:

javascript
Copy code
// Import React and styled-components
import React from 'react';
import styled from 'styled-components';

// Create a styled component
const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

// Use the styled component in your React component
function App() {
  return (
    <div>
      <Button>Click Me!</Button>
    </div>
  );
}

export default App;


4. go to numberselector file
learned this
const arrnumber=[1,2,3,4,5,6]
const NumberSelector = () => {
  return (
    <>
    {arrnumber.map((value,i)=>( <Box key={i}>{value}</Box>))}
   
    </>
  )
}
map()
array
key
5. remember

whenever we use a function as paarameter which is used as a prop in react component then make sure  it is encolsed within within curly brackets

6. go to startgame.jsx file to see amazing styling of DICE GAME sentence  inside container component 

7.  go to numberselected file 
 <Box isSelected={value==selectedNumber} key={i} onClick={()=>setSelectedNumber(value)}>{value}</Box>

const Box=styled.div`
-----
used the props here as we define  react conponent her like this 
-----
background-color:${(props)=>(props.isSelected? "black": "white")};
color:${(props)=>( props.isSelected ? "white" :"black")};`