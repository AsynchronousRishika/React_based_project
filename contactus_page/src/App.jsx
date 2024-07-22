import { useState } from 'react'

import './App.css'
import Navigation from './components/Navigation/navigation'
import Contact_header from './components/Contact_Header/contact_header'
import { Contactform } from './components/ContactForm/contactform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navigation/>
     <Contact_header/>
     <Contactform/>
    </>
  )
}

export default App
