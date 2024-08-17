import { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { BsFillPatchPlusFill } from "react-icons/bs";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from './config/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Navbar from './components/Navbar'
import Contactcard from './components/Contactcard';

import AddandUpdatecontact from './components/AddandUpdatecontact';
import useDisclousure from './Hooks/useDisclousure';
import NotFoundContact from './components/NotFoundContact';

function App() {
  const [contacts, setcontacts] = useState([]);
  const { isopen, onClose, onOpen } = useDisclousure();


  useEffect(() => {
    const getContacts = async () => {

      try {
        const contactsRef = collection(db, "contacts");


        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setcontacts(contactLists);
          return contactLists;
        })



      }
      catch (error) {
        console.log(error);
      }

    };
    getContacts();

  }, [])

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.Name.toLowerCase().includes(value.toLowerCase())
      );

      setcontacts(filteredContacts);

      return filteredContacts;
    });
  };


  return (
    <>
      <div className='mx-auto  max-w-[370px] px-4 '>

        <Navbar />
        <div className='flex gap-2'>
          <div className='flex relative items-center flex-grow '>
            <IoSearchSharp className=' ml-1 text-3xl text-white absolute' />
            <input onChange={filterContacts} type="text" placeholder='Search Contact' className=' flex-grow bg-transparent rounded-md border border-white h-[40px] text-red-100 pl-10' />
          </div>
          <BsFillPatchPlusFill onClick={onOpen} className=' cursor-pointer text-4xl text-white' />

        </div>
        <div className='overflow-auto mt-3 h-[550px] '>

          {
            contacts.length<=0?(<NotFoundContact/>):
           ( contacts.map((contact) => (
              <Contactcard key={contact.id} contact={contact} />
            )))
          }

        </div>

      </div>
      <ToastContainer position='bottom-center' />
      <AddandUpdatecontact onClose={onClose} isOpen={isopen} />



    </>
  )
}

export default App
