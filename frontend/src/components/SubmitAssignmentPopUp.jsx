import React from 'react'
import { Link } from 'react-router-dom'

const SubmitAssignmentPopUp = () => {

  return (
    <div className='h-screen bg-opacity-70 w-full flex justify-center items-center bg-black top-0 right-0 absolute z-[10000]'>
        <div className='p-10 bg-slate-800 flex flex-col gap-2 border-opacity-15 rounded-md'>
          <label htmlFor="file">Choose file</label>
          
          <input type="file" className="file-input file-input-bordered w-full max-w-xs" />

          <label htmlFor="date">Choose date</label>
          <input type="date" className='p-2 border-opacity-25 outline-none rounded-md' />
          <Link to={"/admin/classroom"}>
          <button 
            className='btn bg-blue-500 text-white'> Submit </button>
          </Link>
        </div>

    </div>
  ) 
}

export default SubmitAssignmentPopUp