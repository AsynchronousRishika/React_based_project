import React, { useState, useEffect } from 'react'
import { getDatabase, onValue, ref, remove } from 'firebase/database'
import { app } from '../Firebase';
function StudentList() {
  const [students, setStudents] = useState(null)
  useEffect(() => {
    const db = getDatabase(app);
    const studentRef = ref(db, 'student')
    onValue(studentRef, (snapshot) => {
      const data = snapshot.val()
      
      setStudents(data)
    })
  }, [])
  const Deletedata = (key) => {
    const db = getDatabase(app)
    const studentref = ref(db, 'student/' + key)
    remove(studentref)
  }
  return (
    <div>
      <h1>Student List</h1>
      {students && (
        <div>
          {Object.entries(students).map(([key, value]) => {
            return (
              <div key={key}>
                <p> {key} {value.studentname} {value.studentphone}</p>
                <button onClick={()=>{Deletedata(key)}}>Delete</button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default StudentList