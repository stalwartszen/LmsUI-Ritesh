import React from 'react'
import { Link } from 'react-router-dom'

const Assignmentcard = ({card}) => {
    const { code, name, Objectives , id } = card
    
    return (
        <>
            <div className="bg-slate-800 relative h-[230px] p-5 flex flex-col rounded-lg">
                    <div className='flex items-start gap-3'>
                        <h1 className='text-lg w-fit'>{name}</h1>
                        <p className=' rounded-full px-5 text-sm p-2 bg-blue-900 text-white'>{code}</p>
                    </div>
                    <div className=''>
                    <p className='text-slate-500 text-sm  pt-4'>
                        <span className='text-white'>Objectives : </span>
                        {Objectives}
                    </p>
                    </div>
                    <Link to={`/admin/classroom/${id}`}>
                    <button type="button" className='bg-blue-700 absolute bottom-5  py-2 px-10 rounded-md'>view</button>
                    </Link>
            </div>
        </>
    )
}

export default Assignmentcard