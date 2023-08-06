import { ChartBarSquareIcon } from '@heroicons/react/24/outline'
import { UsersIcon } from '@heroicons/react/24/outline'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { DocumentChartBarIcon } from '@heroicons/react/24/outline'
import { UserPlusIcon } from '@heroicons/react/24/outline'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex gap-2 justify-between items-center my-2 mx-[6rem] px-10'>
        <div className='flex nav-btn gap-2 p-3'>
            <ChartBarSquareIcon className='w-6' />
            <p>Dashboard</p>
        </div>
        <div className='flex nav-btn gap-2 p-3'>
            <UsersIcon className='w-6' />
            <p>Classroom</p>
        </div>
        <div className='flex nav-btn gap-2 p-3'>
            <ChatBubbleLeftRightIcon className='w-6' />
            <p>Chatroom</p>
        </div>
        <div className='flex nav-btn gap-2 p-3'>
            <DocumentChartBarIcon className='w-6' />
            <p>Notice</p>
        </div>
        <div className='flex nav-btn gap-2 p-3'>
            <UserPlusIcon className='w-6' />
            <p>Activity</p>
        </div>
        <div className='flex nav-btn gap-2 p-3'>
            <BookOpenIcon className='w-6' />
            <p>E-library</p>
        </div>
        <div className='flex nav-btn gap-2 p-3'>
            <ChartBarSquareIcon className='w-6' />
            <p>TPO</p>
        </div>
    </div>
  )
}

export default Navbar