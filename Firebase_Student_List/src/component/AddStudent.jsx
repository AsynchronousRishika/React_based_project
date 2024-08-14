import React, { useState } from 'react'
import { getDatabase, set, ref } from 'firebase/database'
import { app } from '../Firebase'
import { useNavigate } from 'react-router-dom'
function AddStudent() {
    const [name, setname] = useState('')
    const [phone, setphone] = useState(null)
    const [rollNum, setrollnum] = useState(null)
  const navigate=useNavigate()

    const submitHandler = (event) => {
        const db = getDatabase(app)
        set(ref(db, 'student/' + rollNum), {
            studentname: name,
            studentphone: phone
        }).then(res=>{
            navigate('/StudentList')
        }).catch(err=>{console.log(err)})
        event.preventDefault();
     
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={(e) => setrollnum(e.target.value)} type="text" placeholder='roll no.' />
                <input onChange={(e) => setname(e.target.value)} type="text" placeholder='student name' />
                <input onChange={(e) => setphone(e.target.value)} type="number" placeholder='phone number' />
                <button>
                    submit
                </button>
            </form>

        </div>
    )
}

export default AddStudent