import React, { useState } from 'react'
import Data from "../data.json";
import SubmitAssignmentPopUp from "./SubmitAssignmentPopUp";
import { useParams, Link,Outlet, useNavigate } from "react-router-dom";


const Assignments = () => {
  const { id } = useParams();
  


  return (
    <div className="p-5 border-slate-700 flex flex-col gap-3 rounded-xl border bg-slate-900  ">
        <h1 className="text-xl my-3">All Assignments</h1>
        <div className='flex flex-col'>
          <Listview />
        <Listview />
        <Listview />
        <Listview />
        <Listview />
        </div>
        
    </div>
  )
}


export default Assignments



const Listview = () => {
    const [show,setshow] = useState()
  
    return (
      <>
        <div className="flex border-b border-slate-800 py-4 items-center">
          <input type="checkbox" className="h-8 w-8 mr-5" name="" id="" />
          <div className="flex-1">
            <h2>task 1</h2>
            <div className="flex gap-5">
              <p className="text-slate-400">submission_date</p>
              <p className="text-slate-400">Marks : </p>
            </div>
          </div>
          <button
            onClick={() => setshow(true)}
            className="p-2 m-2 bg-blue-600 px-5 rounded-md"
          >
            Submit
          </button>
          <button className="p-2 m-2 bg-slate-500 px-5 rounded-md">View</button>
          {show ? <SubmitAssignmentPopUp set={setshow} /> : null}
        </div>
      </>
    );
  };
  
