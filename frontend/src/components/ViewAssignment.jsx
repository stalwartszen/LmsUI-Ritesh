import { useParams, Link,Outlet, useNavigate } from "react-router-dom";
import Data from "../data.json";
import {
  ArrowLeftCircleIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";


const ViewAssignment = () => {
  const { id } = useParams();

  const navigate = useNavigate()

  const singleAssigment = Data.filter((a) => a.id === id);
  const Dataobj = singleAssigment[0];


  const handleSelect =(e) =>{
    const route = e.target.value
    navigate(`/admin/classroom/${id}/${route}`)
  }

  return (
    <>
      <div className="p-10 rounded-lg bg-slate-900">
        <div className="flex pb-5 items-center j">
          <div className="flex-1 flex items-center">
            <Link to={"/admin/classroom"}>
              <button className="btn-sm p-2 rounded-md">
                <ArrowLeftCircleIcon className="w-9 text-blue-600" />
              </button>
            </Link>
            <div className="ml-5">
              <h1 className="text-2xl">{Dataobj.Subject}</h1>
              <p className="text-slate-400">{Dataobj.Teacher}</p>
            </div>
          </div>
          {/* <ChevronDoubleLeftIcon className='w-7'/> */}
          <select  
            onChange={handleSelect}
            className="select-md bg-slate-800 outline-none rounded-md" name="" id="">
            <option className="p-1" value="assigments">Assigments</option>
            <option value="modules">Modules</option>
          </select>
        </div>


        <div className=" h-full">
            <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};
export default ViewAssignment;
