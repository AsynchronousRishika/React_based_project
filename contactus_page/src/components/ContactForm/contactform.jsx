import React from 'react'
import styles from "./contactform.module.css"
import { Button } from '../button/button'
import { AiFillMessage } from "react-icons/ai";
import { FaSquarePhone } from "react-icons/fa6";
export const Contactform = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<AiFillMessage fontSize="24px" />} />
            <Button text="CONTACT NUMBER" icon={<FaSquarePhone fontSize="24px" />
            } />
          </div>
          <Button
            isOutline={true} text="VIA EMAIL" icon={<FaSquarePhone />} />

            <form action='/action_page.php'>
            <fieldset>
            <legend> <label htmlFor="name" >Name :</label></legend>
            <input type="text" id="name" required placeholder='Enter Name'/>  
            </fieldset>

            <fieldset>
            <legend> <label htmlFor="email" >EMAIL :</label></legend>
            <input type="email" id="email" required placeholder='Enter Email' />  
            </fieldset> 

            <fieldset>
            <legend> <label htmlFor="number" >NUMBER :</label></legend>
            <input type="tel" id="number"  pattern='[1-9]{1}[0-9]{9}'required placeholder='Enter Phone Number' />  
            </fieldset> 
            <fieldset>
            <legend> <label htmlFor="text" >PROBLEM :</label></legend>
            <textarea  name="text" placeholder='Enter Problem' rows={4} cols={55} />  
            </fieldset> 
             
            
            <Button isOutline={true} text="SUBMIT"  className={styles.submit_btn}/>
                       
            </form>
        </div>

        <div className={styles.contactImage}>
          <img src=".\images\flat-customer-support-illustration.png"  />
        </div>


      </section>
    </>
  )
}
