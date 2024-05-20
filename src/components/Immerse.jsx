import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Immerse() {
    return (
        <div className='bg-orange-300 p-7 md:flex items-center '>
            <div className='md:w-[40%] md:mr-[100px]'>
                <h1 className='text-5xl text-center font-semibold mb-4'>IMMERSE IN ENGAGING CONTENT</h1>
                <p className='text-xl text-center'>Dive into the ocean of content from thought- provoking ideas, in-depth blogs, and insightful podcasts.</p>
                <div className='flex justify-center my-5 gap-2'>
                    <button className='bg-black text-white p-1 rounded-xl'>EXPLORE NOW</button>
                    <FontAwesomeIcon icon={faArrowRight} className='mt-2 border border-black rounded-full p-2'/>
                </div>
                
            </div>
            <div className='w-60%'>
                <img src="https://images.pexels.com/photos/4458418/pexels-photo-4458418.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='rounded-xl'/>
            </div>
        </div>
    )
}

export default Immerse
