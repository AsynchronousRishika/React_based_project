import React from 'react'
import { getDatabase, ref, set } from "firebase/database"
import { app } from "../Firebase"
function AddData() {

    const addDemoData = (userId, name, phone) => {
        console.log(userId, name, phone)
        const db = getDatabase(app)
        set(ref(db, 'student/' + name), {
            studentName: userId,
            studentPhone: phone
        })
    }


    return (
        <>
            <h1>add data</h1>
            <button onClick={() => { addDemoData(123, 'satyam', 145623789) }}>add demo data</button>
        </>
    )
}

export default AddData;