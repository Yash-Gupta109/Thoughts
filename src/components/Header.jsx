import React from 'react'

function Header() {
    return (
        <div className='flex bg-[#fadcd9] justify-between p-4'>
            <div>
                <h3 className='text-xl font-bold'>Thoughts</h3>
            </div>
            <div className='flex gap-4 font-semibold'>
                <a href="" className='hover:text-gray-600 mt-2 hidden md:block'>Thoughts</a>
                <a href="" className='hover:text-gray-600 mt-2 hidden md:block'>Blog</a>
                <a href="" className='hover:text-gray-600 mt-2 hidden md:block'>Podcasts</a>
                <a href="" className='hover:text-gray-600 mt-2 hidden md:block'>Pricing</a>
                <a href="" className='hover:text-gray-600 mt-2 hidden md:block'>Contact Us</a>
                <button className='bg-white rounded-xl p-2'>Login</button>
                <button className='bg-black text-white rounded-xl p-2'>Signup</button>
            </div>
        </div>
    )
}

export default Header
