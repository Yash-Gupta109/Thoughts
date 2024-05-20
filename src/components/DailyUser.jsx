import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function DailyUser() {
    return (
        <div className='bg-[#fadcd9] px-4 pt-8'>
            <div className='flex justify-center'>
                <img src="https://images.pexels.com/photos/6612702/pexels-photo-6612702.jpeg?auto=compress&cs=tinysrgb&w=600" className='rounded-xl md:w-1/2' alt="" />
            </div>
            <div className='flex gap-3 justify-center mt-4 pb-4'>
                <div className='flex gap-3 bg-[#f0e3e6] w-fit p-2 rounded-xl'>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> <span className='font-bold'>30k</span></p>
                    <p>Daily Thoughts</p>
                </div>
                <div className='flex gap-3 bg-[#f0e3e6] w-fit p-2 rounded-xl'>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> <span className='font-bold'>25k</span></p>
                    <p>Daily Blogs</p>
                </div>
                <div className='flex gap-3 bg-[#f0e3e6] w-fit p-2 rounded-xl'>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> <span className='font-bold'>22k</span></p>
                    <p>Daily Podcast</p>
                </div>
            </div>
        </div>
    )
}

export default DailyUser
