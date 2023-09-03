import React from 'react'
import profile from '../assets/profilepic.png'
import { FireIcon , BookOpenIcon } from '@heroicons/react/24/solid'
import { BellIcon } from '@heroicons/react/24/outline'
import Navbar from './Navbar'

const Header = () => {
    return (
        <>
            <div className="flex w-full px-[4rem] py-5">
                <div className="flex items-center">
                    <BookOpenIcon className='h-10 text-blue-600 w-10' />
                    <a className="text-xl font-medium mx-3">EdupherX</a>
                </div>
                <Navbar />
                <div className="flex justify-between gap-2">
                    <div className='flex gap-5 items-center'>
                        <div className='bell'>
                          <BellIcon className='w-12 p-3 rounded-full' />
                        </div>
                        <div className=" w-10">
                            <img className='rounded-full border-2' src={profile} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header