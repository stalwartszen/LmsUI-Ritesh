import Data from '../data.json'
import React from 'react'

const ViewAssignment = () => {

    return (
        <>
            <div className='flex items-center'>
                <div className='flex-1 flex items-center'>
                    <div className='w-20 h-20 rounded-full bg-yellow-500'>
                        <img src="" alt="" />
                    </div>
                    <div className='ml-5'>
                        <h1 className='text-2xl'>Blockchian</h1>
                        <p className='text-slate-400'>Vidaya moham</p>
                    </div>
                </div>
                <h2 className='text-2xl '>1/4</h2>
            </div>

            {/* list */}
            <h1 className='mb-4 mt-10 text-xl'>Homework</h1>
           <Listview />
           <Listview />
           <Listview />
           <Listview />

        </>
    )
}
export default ViewAssignment




const Listview = () => {
  return (
    <>
     <div className='flex border-b py-4 items-center'>
                <input type="checkbox" className='h-8 w-8 mr-5' name="" id="" />
                <div className='flex-1'>
                    <h2>Solidity Homework notes</h2>
                    <div className='flex gap-5'>
                        <p className='text-slate-400'>Tommarow</p>
                        <p className='text-slate-400'>Marks : 20</p>
                    </div>
                </div>
                    <button className='p-2 m-2 bg-blue-600 px-5 rounded-md'>Submit</button>
                    <button className='p-2 m-2 bg-slate-500 px-5 rounded-md'>View</button>
            </div>
    </>
  )
}