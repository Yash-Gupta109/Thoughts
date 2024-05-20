import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck ,faHeart,faArrowsRotate,faPaperPlane,faArrowRight} from '@fortawesome/free-solid-svg-icons'

function Explore() {
    return (
        <div className='p-5 md:p-9'>
            <h1 className='flex justify-center md:text-4xl text-3xl font-bold text-center mb-6'>Explore YOUR FAVORITE TOPICS</h1>
            <p className='flex justify-center text-center mb-6'>Explore our curated collection of thoughts and perspectives designed to empower and educate on matters of health and well-being. We hope you will love exploring thoughts of different people around the world.</p>
            <div className='flex gap-3 p-2 bg-slate-200 w-fit rounded-xl mx-auto mb-6'>
                <a href="" className='bg-white p-1 rounded-xl font-semibold'>Health Care</a>
                <a href="" className='font-semibold mt-1'>Technology</a>
                <a href="" className='font-semibold mt-1'>Fashion</a>
                <a href="" className='font-semibold mt-1'>Self Growth</a>
            </div>
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
                    <img src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-[380px] h-[170px] mx-auto mb-2 rounded-xl object-cover'/>
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
                        <img className='w-9 h-9 rounded-full object-cover' src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div>
                            <p className='font-bold text-sm'>Lily Oliver <span><FontAwesomeIcon icon={faCircleCheck} /></span></p>
                            <p className='text-sm'>@lilyoliver12</p>
                        </div>
                    </div>
                    <p className='my-2 mb-3'>Kindness costs nothing. but its value is immeasurable <span><FontAwesomeIcon icon={faHeart} /></span> <br/> Spread love and positivity wherever you go</p>
                    <img src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-[380px] h-[170px] mx-auto mb-2 rounded-xl object-cover'/>
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
                        <img className='w-9 h-9 rounded-full object-cover' src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div>
                            <p className='font-bold text-sm'>Lily Oliver <span><FontAwesomeIcon icon={faCircleCheck} /></span></p>
                            <p className='text-sm'>@lilyoliver12</p>
                        </div>
                    </div>
                    <p className='my-2 mb-3'>Kindness costs nothing. but its value is immeasurable <span><FontAwesomeIcon icon={faHeart} /></span> <br/> Spread love and positivity wherever you go</p>
                    <img src="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-[380px] h-[170px] mx-auto mb-2 rounded-xl object-cover'/>
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
                <div className='border border-black rounded-xl p-3 mt-3'>
                    <div className='flex gap-3'>
                        <img className='w-9 h-9 rounded-full object-cover' src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div>
                            <p className='font-bold text-sm'>Lily Oliver <span><FontAwesomeIcon icon={faCircleCheck} /></span></p>
                            <p className='text-sm'>@lilyoliver12</p>
                        </div>
                    </div>
                    <p className='my-2 mb-3'>Kindness costs nothing. but its value is immeasurable <span><FontAwesomeIcon icon={faHeart} /></span> <br/> Spread love and positivity wherever you go</p>
                    <img src="https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-[380px] h-[170px] mx-auto mb-2 rounded-xl object-cover'/>
                    <div className='border border-b-black'></div>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <p><span><FontAwesomeIcon icon={faHeart} />1.6K</span></p>
                            <p><span><FontAwesomeIcon icon={faArrowsRotate} />95</span></p>
                            <p><span><FontAwesomeIcon icon={faPaperPlane} />23</span></p>
                        </div>
                        <p>Today, 11:44 AM</p>
                    </div>
                </div>
                <div className='border border-black rounded-xl p-3 mt-3'>
                    <div className='flex gap-3'>
                        <img className='w-9 h-9 rounded-full object-cover' src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div>
                            <p className='font-bold text-sm'>Lily Oliver <span><FontAwesomeIcon icon={faCircleCheck} /></span></p>
                            <p className='text-sm'>@lilyoliver12</p>
                        </div>
                    </div>
                    <p className='my-2 mb-3'>Kindness costs nothing. but its value is immeasurable <span><FontAwesomeIcon icon={faHeart} /></span> <br/> Spread love and positivity wherever you go</p>
                    <img src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-[380px] h-[170px] mx-auto mb-2 rounded-xl object-cover'/>
                    <div className='border border-b-black'></div>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <p><span><FontAwesomeIcon icon={faHeart} />1.6K</span></p>
                            <p><span><FontAwesomeIcon icon={faArrowsRotate} />95</span></p>
                            <p><span><FontAwesomeIcon icon={faPaperPlane} />23</span></p>
                        </div>
                        <p>Today, 11:20 PM</p>
                    </div>
                </div>
                <div className='border border-black rounded-xl p-3 mt-3'>
                    <div className='flex gap-3'>
                        <img className='w-9 h-9 rounded-full object-cover' src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div>
                            <p className='font-bold text-sm'>Lily Oliver <span><FontAwesomeIcon icon={faCircleCheck} /></span></p>
                            <p className='text-sm'>@lilyoliver12</p>
                        </div>
                    </div>
                    <p className='my-2 mb-3'>Kindness costs nothing. but its value is immeasurable <span><FontAwesomeIcon icon={faHeart} /></span> <br/> Spread love and positivity wherever you go</p>
                    <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-[380px] h-[170px] mx-auto mb-2 rounded-xl object-cover'/>
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
            </div>
            <div className='mt-6 flex justify-center gap-1'>
            <button className='p-2 bg-black text-white rounded-xl'>VIEW MORE</button>
            <FontAwesomeIcon icon={faArrowRight} className='text-xl mt-1 border border-black rounded-full p-1' />
            </div>
        </div>
    )
}

export default Explore
