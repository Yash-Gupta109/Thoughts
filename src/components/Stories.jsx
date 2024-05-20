import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Stories() {
    return (
        <div className='bg-black p-7'>
            <h1 className='text-orange-300 md:text-8xl text-5xl font-bold text-center'>COLLECT STORIES & SEEK INSPIRATIONS!</h1>
            <div className='mt-5 flex gap-2 justify-center'>
                <button className='bg-orange-300 p-1 text-black font-bold rounded-xl'>SIGN UP NOW</button>
                <FontAwesomeIcon icon={faArrowRight} className='text-white text-xl border border-white rounded-full p-1 mt-1'/>
            </div>
        </div>
    )
}

export default Stories
