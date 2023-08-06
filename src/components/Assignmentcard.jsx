import React from 'react'

const Assignmentcard = ({card}) => {
    const { Teacher, Subject, Time } = card
    
    return (
        <>
            <div className="card rounded-lg">
                <div className='flex gap-5 p-5'>
                    <div className='bg-yellow-500 w-16 h-16 rounded-full'>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl'>{Subject}</h1>
                        <p className='text-slate-300'>{Teacher}</p>
                    </div>
                </div>
                <div>
                    <p className='text-slate-300 text-center border-t p-2'>{Time}</p>
                    <button type="button" className='bg-blue-600 p-2 rounded-b-lg w-full'>view</button>
                </div>
            </div>
        </>
    )
}

export default Assignmentcard