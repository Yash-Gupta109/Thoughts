import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


function Hero() {
    return (
        <div className=' items-center w-full bg-[#fadcd9] p-5 pb-10'> 
        <div className="relative">
        <p className='text-3xl absolute inset-0 z-10 italic text-center text-[#977639] font-bold hidden md:block'>Share Your Independent Thought</p>
        <h1 className="text-7xl md:text-9xl font-bold text-center">WHERE EVERY THOUGHT IS HEARD.</h1>
        </div>

        <div className='flex gap-3 bg-transparent bg-slate-100 w-fit mx-auto p-2 rounded-xl mt-10'>
        <div className='flex'>
            <img className='w-8 h-8 rounded-full object-cover' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <img className='w-8 h-8 rounded-full object-cover' src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <img className='w-8 h-8 rounded-full object-cover' src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <img className='w-8 h-8 rounded-full object-cover' src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <img className='w-8 h-8 rounded-full object-cover' src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <img className='w-8 h-8 rounded-full object-cover' src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <p>+100k WorldWide users</p>
        </div>

        <p className='flex justify-center mt-7 text-center'>Introducing Thoughts-Where every voice and every thought can be shared effortlessly via tweets or in the form of engaging blogs.</p>

        <div className='flex mt-10 justify-center'>
        <button className='bg-black rounded-xl text-white p-2 text-xl'>Get Started</button>
        <p className='text-2xl ml-2 mt-1'><FontAwesomeIcon icon={faArrowRight} /></p>
        </div>

        </div>
    )
}

export default Hero
