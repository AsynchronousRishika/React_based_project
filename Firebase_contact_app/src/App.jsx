import { useState } from 'react'
import AddData from './component/AddData'
import {createBrowserRouter,RouterProvider } from "react-router-dom"
import Dashboard from './component/Dashboard'
import AddStudent from './component/AddStudent'
import StudentList from './component/StudentList'
const myRouter=createBrowserRouter([
  {path:'',Component:Dashboard,children:[
    {path:'',Component:StudentList},
    {path:'AddStudent',Component:AddStudent},
    {path:'StudentList',Component:StudentList}
  ]}
])
function App() {


  return (
    <>
      
      <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
