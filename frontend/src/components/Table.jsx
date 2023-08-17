import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";


const Table = () => {
  return (
    <div className="h-screen">
      <h1 className="py-10 text-xl font-semibold">Tables layout </h1>
      <table className="table-auto w-full relative">
        <thead className="bg-slate-800">
          <tr className="">
            <th className="p-2 px-5 rounded-tl-md text-left">Student Name</th>
            <th className="p-2 px-5 text-left">Branch</th>
            <th className="p-2 px-5 text-left">class</th>
            <th className="p-2 px-5 text-left">status</th>
            <th className="p-2 px-5 rounded-tr-md  text-left">Year</th>
          </tr>
        </thead>
        {
            Data.map((item)=>{
                return <TableBody key={item.id} props={item} />
            })
        }
      </table>
    </div>
  );
};

export default Table;

const TableBody = ({props}) => {
    
  const [details, showDetails] = useState(false);

  const handleshow = () => {
    showDetails(true);
    if (details === true) {
      showDetails(false);
    }
  };

  return (
    <>
      <tbody className="">
        <tr className="">
          <td className="px-5 py-5 flex gap-2 bg-slate-900">
            <ChevronDownIcon onClick={handleshow} className="w-4" />
            {props.student}
          </td>
          <td className="px-5 py-5 bg-slate-900">{props.branch}</td>
          <td className="px-5 py-5 bg-slate-900">{props.batch}</td>
          <td className="px-5 py-5 bg-slate-900">
            {
                props.status ? 
            <span className="p-1 bg-green-600  rounded-full px-3 text-sm">
              Done
            </span> : 
            <span className="p-1 bg-red-600 rounded-full px-3 text-sm">
              pending
            </span>
            }
          </td>
          <td className="px-5 py-5 bg-slate-900">{props.year}</td>
        </tr>
        <tr>
            <td colSpan={'5'}>

            {details ? <DetailsComp props={props} /> : null}
            </td>
        </tr>
      </tbody>
    </>
  );
};

const DetailsComp = ({props}) => {

  return (
    <>
      <div className="w-full flex items-center gap-2 p-5 px-10 bg-slate-950">
        <div className="flex gap-2 items-center">
          <h1>Academic progress : </h1>
          <div className="bg-slate-600 relative w-32 h-3 rounded-full">
            <span style={{width:props.progress}} className={`absolute top-0 rounded-full left-0 bg-green-400 h-3 z-10`}>
              
            </span>
          </div>
        </div>

        <div className="mx-10">
          <h1>Atendence : {props.attendence}% </h1>
        </div>
        <div className="mx-10">
          <h1>Test performance : {props.test}% </h1>
        </div>
      </div>
    </>
  );
};





const Data = [
    {
        id: '9127',
        student: 'Ritesh Vikas mane',
        branch : 'IT-science',
        batch : 'Bsc-chemistry',
        status: true,
        year : '2024-28',
        progress : '95%',
        attendence : 80,
        test : 99
    },
    {
        id: '9227',
        student: 'Vilas Baburao patil',
        branch : 'Commerce',
        batch : 'Bcom',
        status: true,
        year : '2017-28',
        progress : '75%',
        attendence : 90,
        test : 79
    },
    {
        id: '8819',
        student: 'Janhvi Rajkumar Jagtap',
        branch : 'IT-science',
        batch : 'Bsc-chemistry',
        status: false,
        year : '2014-23',
        progress : '55%',
        attendence : 75,
        test : 89
    },
    {
        id: '4526',
        student: 'Pratik vijay Mungale',
        branch : 'organic chemistry',
        batch : 'Bsc-chemistry',
        status: false,
        year : '2014-18',
        progress : '65%',
        attendence : 60,
        test : 73
    },
    {
        id: '9810',
        student: 'Rahul Sairam Kamble',
        branch : 'Biology',
        batch : 'Bsc-Biology',
        status: true,
        year : '2014-28',
        progress : '89%',
        attendence : 40,
        test : 78
    },
    {
        id: '7127',
        student: 'Soham Somnath Pathak',
        branch : 'Electrinics',
        batch : 'Bsc-pharmacy',
        status: false,
        year : '2018-28',
        progress : '75%',
        attendence : 70,
        test : 69
    }
]