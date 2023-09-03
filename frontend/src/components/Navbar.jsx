import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import { UsersIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { DocumentChartBarIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-1 gap-5 justify-evenly items-center my-2 mx-[6rem] px-10">
      <Link to={"/admin"} className=" p-2">
        <p>Dashboard</p>
      </Link>
      <NavLink to={"/admin/classroom"} className=" p-2">
        <p>Classroom</p>
      </NavLink>
      <NavLink to={"/admin/chatroom"} className=" p-2">
        <p>Chatroom</p>
      </NavLink>
      <NavLink to={"/admin/notice"} className=" p-2">
        <p>Notice</p>
      </NavLink>
      <NavLink to={"/admin/activity"} className=" p-3">
        <p>Activity</p>
      </NavLink>
      <NavLink to={"/admin/elibrary"} className=" p-3">
        <p>E-library</p>
      </NavLink>
      <NavLink to={"/admin/tpo"} className="p-3">
        <p>TPO</p>
      </NavLink>
    </div>
  );
};

export default Navbar;
