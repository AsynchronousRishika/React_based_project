Contact US 
-----------
-------------
1.
Inline styles are not react specific They are a regular HTML feature:
-------------------------------------
<p style="color: red">Example Text</p>
--------------------------------------
However, we have to use it a little bit differently in react. Instead of passing a string with all the styles to the attribute, we need to assign an object:

---------------------------------------

render() {
    return (
         <p style={{color: 'red'}}>
            Example Text
        </p>
    );
}

---------------------------------------

Notice, that the outer brace is the regular "this is JavaScript" JSX syntax. The inner brace is the inline definition of a new object.

Instead of defining the style object inline, we could also define an object in our code that stores the style properties.
--------------------------------------
render() {
  const styles = {
    color: 'blue'
  }

  return (
      <p style={styles}>
        Example Text
      </p>
  );
}
----------------------------------------




2.

import css file in navigation.jsx file
