import React from 'react';

function Contact() {
    return (
        <div>
            <h1 className='font-bold text-3xl p-5 m-5 text-red-600'> Contact Us page</h1>
            <form className='p-5'>
                <input type='text' className='border border-black p-2 m-2' placeholder='name'></input>            
                <input type='text' className='border border-black p-2 m-2' placeholder='message'></input>
                <button className='border border-black p-2 m-2 bg-gray-100 rounded-lg'>Submit</button>            
            </form>
        </div>
    );
}

export default Contact;