import React from 'react'
import { PlusIcon } from "@heroicons/react/24/solid"
import Assignmentcard from './assignmentcard'
import ViewAssignment from './ViewAssignment'
import Data from '../data.json'
import { Outlet } from 'react-router-dom'

const Assignments = () => {


    return (
        <>
            <div className='flex justify-between'>
                <h1 className='text-xl pt-4'>Assignments</h1>
                <button className='px-4  flex items-center gap-2 bg-blue-600 rounded-md text-sm'>
                    <PlusIcon className='w-5 font-semibold' />
                    New
                </button>
            </div>
            <div className='flex gap-5 py-5'>
                <div className='grid grid-cols-2 gap-5 flex-1'>
                    {
                        Data.map((card)=>{
                            return <Assignmentcard card={card} />
                        })
                    }
                </div>
                <div className='p-8 rounded-lg bg-slate-800 flex-1'>
                    <ViewAssignment />
                </div>
            </div>
        </>
    )
}

export default Assignments