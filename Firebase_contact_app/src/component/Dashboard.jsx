import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Dashboard() {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '20%', backgroundColor: 'royalblue', height: '100vh' }}>
                    <h1>side nav</h1>
                    <Link to='/AddStudent' style={{ color: 'white', display: 'block' }}> Add Student</Link>
                    <Link to='/StudentList' style={{ color: 'white', display: 'block' }}>Student</Link>
                </div>

                <div style={{ width: '70%', height: '100vh' }}>
                    <h1>content</h1>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Dashboard