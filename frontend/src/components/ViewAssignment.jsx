import {
  useParams,
  NavLink,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Data from "../data.json";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const ViewAssignment = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const NavStyle = ({ isActive, isPending }) =>{
   return isPending ? "off" : isActive ? "on" : ""
  }


  return (
    <>
      <div className="pt-5 gap-8 h-full flex rounded-lg">
        <div className="flex flex-col pt-5 items-center gap-3">
          <div className="flex">
            <Link to={"./"}>
              <ArrowLeftCircleIcon className="w-9 mr-5 text-blue-600" />
            </Link>
            <div>
              <h1 className="text-xl">Mathematics</h1>
              <p className="text-slate-600">Gapat rao apte</p>
            </div>
          </div>

          <div className=" rounded-lg pt-5  flex flex-col gap-2 w-[200px] h-auto">
            <NavLink
               className={({isActive}) => isActive ? "on" : 'off'}
               to={'/admin/classroom/${id}/modules'}
            >
              <p>Modules</p>
            </NavLink>
            <NavLink
               className={({isActive}) => isActive ? "on" : 'off'}
               to={'/admin/classroom/${id}/assignments'}
            >
              <p>Assignments</p>
            </NavLink>
          </div>
        </div>

        <div className="h-full flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};
export default ViewAssignment;
