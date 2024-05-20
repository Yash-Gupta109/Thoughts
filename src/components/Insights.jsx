import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck ,faHeart,faArrowsRotate,faPaperPlane,faArrowRight} from '@fortawesome/free-solid-svg-icons'

function Insights() {
    return (
        <div className='p-5 md:p-9'>
            <h1 className='flex justify-center md:text-4xl text-3xl font-bold text-center mb-6'>OUR LATEST INSIGHTS</h1>
            <p className='flex justify-center text-center mb-6'>Stay updated and inspired with our latest insights into a variety of topics, ranging from technology trends to lifestyle tips.</p>
            <div className='md:flex md:flex-wrap  gap-1'>
                <div className='border border-black rounded-xl p-3 mt-3 md:mt-0'>
                    <div className='flex gap-3'>
                        <img className='w-9 h-9 rounded-full object-cover' src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div>
                            <p className='font-bold text-sm'>Lily Oliver <span><FontAwesomeIcon icon={faCircleCheck} /></span></p>
                            <p className='text-sm'>@lilyoliver12</p>
                        </div>
                    </div>
                    <p className='my-2 mb-3'>Kindness costs nothing. but its value is immeasurable <span><FontAwesomeIcon icon={faHeart} /></span> <br /> Spread love and positivity wherever you go</p>
                    <img src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-[380px] h-[170px] mx-auto mb-2 rounded-xl object-cover'/>
                    <div className='border border-b-black'></div>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <p><span><FontAwesomeIcon icon={faHeart} />1.6K</span></p>
                            <p><span><FontAwesomeIcon icon={faArrowsRotate} />95</span></p>
                            <p><span><FontAwesomeIcon icon={faPaperPlane} />23</span></p>
                        </div>
                        <p>Yesterday, 11:20 PM</p>
                    </div>
                </div>
                <div className='border border-black rounded-xl p-3 mt-3 md:mt-0'>
                    <div className='flex gap-3'>
                        <img className='w-9 h-9 rounded-full object-cover' src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div>
                            <p className='font-bold text-sm'>Lily Oliver <span><FontAwesomeIcon icon={faCircleCheck} /></span></p>
                            <p className='text-sm'>@lilyoliver12</p>
                        </div>
                    </div>
                    <p className='my-2 mb-3'>Kindness costs nothing. but its value is immeasurable <span><FontAwesomeIcon icon={faHeart} /></span> <br/> Spread love and positivity wherever you go</p>
                    <img src="https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-[380px] h-[170px] mx-auto mb-2 rounded-xl object-cover'/>
                    <div className='border border-b-black'></div>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <p><span><FontAwesomeIcon icon={faHeart} />1.6K</span></p>
                            <p><span><FontAwesomeIcon icon={faArrowsRotate} />95</span></p>
                            <p><span><FontAwesomeIcon icon={faPaperPlane} />23</span></p>
                        </div>
                        <p>1 day ago</p>
                    </div>
                </div>
                <div className='border border-black rounded-xl p-3 mt-3 md:mt-0'>
                    <div className='flex gap-3'>
                        <img className='w-9 h-9 rounded-full object-cover' src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div>
                            <p className='font-bold text-sm'>Lily Oliver <span><FontAwesomeIcon icon={faCircleCheck} /></span></p>
                            <p className='text-sm'>@lilyoliver12</p>
                        </div>
                    </div>
                    <p className='my-2 mb-3'>Kindness costs nothing. but its value is immeasurable <span><FontAwesomeIcon icon={faHeart} /></span> <br/> Spread love and positivity wherever you go</p>
                    <img src="https://images.pexels.com/photos/4577849/pexels-photo-4577849.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-[380px] h-[170px] mx-auto mb-2 rounded-xl object-cover'/>
                    <div className='border border-b-black'></div>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <p><span><FontAwesomeIcon icon={faHeart} />1.6K</span></p>
                            <p><span><FontAwesomeIcon icon={faArrowsRotate} />95</span></p>
                            <p><span><FontAwesomeIcon icon={faPaperPlane} />23</span></p>
                        </div>
                        <p>2 days ago</p>
                    </div>
                </div>
                
            </div>
            <div className='mt-6 flex justify-center gap-1'>
            <button className='p-2 bg-black text-white rounded-xl'>VIEW MORE</button>
            <FontAwesomeIcon icon={faArrowRight} className='text-xl mt-1 border border-black rounded-full p-1' />
            </div>
        </div>
    )
}

export default Insights
