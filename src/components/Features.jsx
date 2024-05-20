import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

function Features() {
    return (
        <div className='bg-black p-7'>
            <div className='text-orange-300 text-7xl md:text-9xl font-bold text-center'>FEATURES WITH MORE WONDERS</div>
            <div className='mt-6 md:flex md:justify-between'>
                <div className='text-white md:w-[40%] md:mr-4 md:mt-8'>
                    <div className='flex justify-between p-2 hover:bg-white hover:text-black font-semibold hover:rounded-xl'>
                        <p>THOUGHTS SHARING</p>
                        <FontAwesomeIcon icon={faArrowRight} className='border border-white rounded-full p-1'/>
                    </div>
                    <div className='flex justify-between p-2 hover:bg-white hover:text-black font-semibold hover:rounded-xl'>
                        <p>PERSONALISED BLOG</p>
                        <FontAwesomeIcon icon={faArrowRight} className='border border-white rounded-full p-1'/>
                    </div>
                    <div className='flex justify-between p-2 hover:bg-white hover:text-black font-semibold hover:rounded-xl'>
                        <p>PODCAST LISTENING</p>
                        <FontAwesomeIcon icon={faArrowRight} className='border border-white rounded-full p-1'/>
                    </div>
                    <div className='flex justify-between p-2 hover:bg-white hover:text-black font-semibold hover:rounded-xl'>
                        <p>LISTEN WITH AUDIO</p>
                        <FontAwesomeIcon icon={faArrowRight} className='border border-white rounded-full p-1'/>
                    </div>
                    <div className='flex justify-between p-2 hover:bg-white hover:text-black font-semibold hover:rounded-xl'>
                        <p>CYBERGUARD SECURITY</p>
                        <FontAwesomeIcon icon={faArrowRight} className='border border-white rounded-full p-1'/>
                    </div>
                </div>
                <div className='bg-white p-5 flex md:w-[60%] rounded-xl gap-3 mt-4 md:mt-0'>
                    <img src="https://images.pexels.com/photos/4050398/pexels-photo-4050398.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-[250px] w-[40%] min-w-[40%] object-cover rounded-xl'/>
                    <div>
                        <p>Explore a rich collection of thought- provoking blogs or share your own insights. Our user-friendly platform allows seamless reading and effortless uploading to foster a vibrant community of ideas</p>
                        <div className='flex  mt-4 gap-2'>
                            <button className='bg-black text-white rounded-xl p-1'>TRY NOW</button>
                            <FontAwesomeIcon icon={faArrowRight} className='border border-black rounded-full p-1 mt-1'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
