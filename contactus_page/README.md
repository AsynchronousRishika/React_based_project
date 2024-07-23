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
----------------------------------------
things i didn't wrote in code
----------------------------------------
3. className={styles.CLASSNAME}
4. event.preventDefault();

![alt text](readme_image\image.png)

5.  
 after preventDefault()
 
![alt text](readme_image\image1.png)
6. 
![alt text](readme_image\image2.png)
for printing form data in console window
 on submitting form in console window we got the form data


 7. ![alt text](readme_image\image3.png)
 using usestate hook for changing value of name email text phonenumber.kyunki react simply defined variable ko re render nhi krpata h  esliye use state  hook k use kiya taaki agr hum jsx m variable ko likh rhe h toh wwo upadte hoske  




8.  ![alt text](readme_image\image4.png)