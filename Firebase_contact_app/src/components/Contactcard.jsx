import React, { useState } from 'react'
import AddandUpdatecontact from './AddandUpdatecontact';
import { MdDeleteOutline } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { db } from '../config/firebase';
import { doc, deleteDoc } from "firebase/firestore";
import useDisclousure from '../Hooks/useDisclousure';
import { toast } from 'react-toastify';
const Contactcard = ({ contact }) => {

  const {isopen, onClose,onOpen} = useDisclousure();
 

  const deleteContact = async (id) => {
    try {

     await deleteDoc(doc(db, "contacts", id));
     toast.success("Contact Deleted Successfully")
     
    }
    catch (error) {
      console.log(error);
    }
  }




  return (
    <>  
    <div key={contact.id} className=' w-[320px] grid  mb-4 rounded-lg bg-stone-600 h-[90px] justify-between    flex-col px-1' title='Contact Card'>
      <div className='flex   mt-1 gap-44'>
        <IoIosContact className='text-yellow size-7  ' />
        
        <div className='flex  justify-end text-yellow gap-8 ml-10' >
          <FaUserEdit onClick={onOpen} className=' cursor-pointer size-5' title="edit" />
          <MdDeleteOutline onClick={() => deleteContact(contact.id)} className='cursor-pointer size-5' title="delete contact" />
        </div>
      </div>
      <div className='text-yellow  '>
        <h2 className=''> Name: {contact.Name}</h2>
        <p className=''>email: {contact.email}</p>
      </div>
    </div>
    <AddandUpdatecontact contact={contact} isUpdate isOpen={isopen} onClose={onClose}/>
    </>
  )
}

export default Contactcard;