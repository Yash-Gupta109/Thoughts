import React from 'react'

function Footer() {
    return (
        <div className='bg-black text-pink-200 text-center p-7'>
            <h1 className='text-8xl font-bold mb-5'>LET'S GET STARTED</h1>
            <div className='bg-[#0d0808] rounded-xl md:mx-9'>
                <div>
                    <h1 className='text-5xl font-semibold'>FEEL FREE TO CONTACT US</h1>
                    <p className='text-xl'>Reach out to us with any questions, feedback, or inquiries you may have. Our team is here to assist you every step of the way.</p>
                </div>
                <div className='md:flex gap-2 justify-center mt-3 hidden md:block p-6'>
                    <input type="text"  className='bg-black text-white p-2 rounded-xl ' placeholder='First Name'/>
                    <input type="text"  className='bg-black text-white p-2 rounded-xl ' placeholder='Last Name'/>
                    <input type="number" name="" id=""  className='bg-black text-white p-2 rounded-xl ' placeholder='Phone Number'/>

                    <select name="" id="sel" className='bg-black text-white rounded-xl p-2 ' >
                        <option value="city" className='text-white'>City</option>
                        <option value="Lucknow" className='text-white'>Lucknow</option>
                        <option value="Delhi" className='text-white'>Delhi</option>
                        <option value="Mumbai" className='text-white'>Mumbai</option>
                    </select>
                    <button className='bg-blue-600 p-2 rounded-xl'>Submit</button>
                </div>
            </div>
            <div>
                <h1></h1>
                <div></div>
            </div>
        </div>
    )
}

export default Footer
