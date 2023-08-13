import React, { useState } from 'react'
import Data from "../data.json";
import SubmitAssignmentPopUp from "./SubmitAssignmentPopUp";
import { useParams, Link,Outlet, useNavigate } from "react-router-dom";


const Assignments = () => {
  const { id } = useParams();
    
  const singleAssigment = Data.filter((a) => a.id === id);
  const Dataobj = singleAssigment[0];

  console.log(Dataobj)

  return (
    <div>
        <h1 className="mb-4 mt-10 text-xl">Homework</h1>
        {Dataobj.Homework.map((task) => {
          return <Listview key={task.id} props={task} />;
        })}
    </div>
  )
}


export default Assignments



const Listview = ({ props }) => {
    const [show, setshow] = useState(false);
    const { submission_date, marks, task } = props;
  
    return (
      <>
        <div className="flex border-b border-slate-800 py-4 items-center">
          <input type="checkbox" className="h-8 w-8 mr-5" name="" id="" />
          <div className="flex-1">
            <h2>{task}</h2>
            <div className="flex gap-5">
              <p className="text-slate-400">{submission_date}</p>
              <p className="text-slate-400">Marks : {marks}</p>
            </div>
          </div>
          <button
            onClick={() => setshow(true)}
            className="p-2 m-2 bg-blue-600 px-5 rounded-md"
          >
            Submit
          </button>
          <button className="p-2 m-2 bg-slate-500 px-5 rounded-md">View</button>
          {show ? <SubmitAssignmentPopUp props={show} /> : null}
        </div>
      </>
    );
  };
  
