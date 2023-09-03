import React, { useEffect, useState } from 'react'
import { PlusIcon } from "@heroicons/react/24/solid"
import Assignmentcard from './assignmentcard'
import ViewAssignment from './ViewAssignment'
import Data from '../data.json'
import { Outlet } from 'react-router-dom'

const Classroom = () => {

    const [subjects,setSubjects] = useState([])

    const getdata = async ()=>{
        try {
            const response = await fetch('http://18.183.222.144:5000/subjects-api/')
            const data = await response.json()
            console.log(data.subjects)
            setSubjects(data.subjects)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getdata()
    },[])

    return (
        <>
        <div className='w-full'>
            <h1 className='text-2xl font-medium p-5 pb-10'>All Subjects</h1>
            <div className='flex gap-5 w-full'>
                <div className='grid grid-cols-4 gap-5 flex-1'>
                    {
                        subjects.map((card) => {
                            return <Assignmentcard key={card.id} card={card} />
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Classroom