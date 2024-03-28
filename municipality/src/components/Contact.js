import React, { useState }  from 'react'

function Contact() {
  return (
    <div className='text-center'>
      <div className='bg-amber-900 p-20 text-5xl font-bold uppercase text-center'>Contact us</div>
      <div className='md:flex gap-10'>
        <div className='p-7'> 
          <h3 className='font-bold text-2xl'>CONTACT US</h3>
          <h4 className='border-b pb-5'>For more information contact using one of the highlighted models below</h4>
          <div className='md:flex gap-10 p-10 border-b'>
          <article>
            <h3>Email:</h3>
            <h4>Municipalityschprimary@gmail.com</h4>
          </article>
          <article>
            <h3>Phone:</h3>
            <h4>+254747559342</h4>
          </article>
          </div>
          <article className='border-b pb-3 mt-5'>
            <h3>Address</h3>
            <h4>
              Municipality primary school, Mutithi, Mwea
            </h4>
            <h4>Along Nairobi-Meru highway</h4>
            <h4>P.O. BOX 43021-00330</h4>
            <h4>Mwea, Kenya</h4>
          </article>
        </div>
        <div className='p-7 w-3/6 text-center'>
          <h3 className='font-bold text-2xl'>SEND A MESSAGE</h3>
          <h4 className='pb-4'>
          You have a comment, suggestion,a question or a complaint? Fill the form below and we will get back to you as soon as we can.we are here to serve you for better.
          </h4>
          <div className='gap-16 md:flex'>
            <input type='text' placeholder='Name*' className='border border-black p-2 m-5' />
            <input type='text' placeholder='Email*' className='border border-black p-2 m-5' />
          </div>
          <div className='md:flex flex-col'>
          <input type='text' placeholder='Mobile Number*' className='border border-black p-2 m-5' />
          <input type='text' placeholder='Subject' className='border border-black p-2 m-5' />
          <textarea className='border m-5 border-black h-28' placeholder='Message'></textarea>
          <button className='bg-yellow-950 w-20 p-3 text-white'>
            Submit
          </button>
          </div>
         
        </div>
      </div>
      <div className=''>
        <h4 className='underline pb-2'>Address:</h4>
        <h5>Municipality Primary School</h5>
        <div className='flex justify-center'>
        <iframe width="50%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=B6,%20Wamumu+(Mwea%20Municipality%20Primary%20School,%20B6,%20Wamumu,%20Kenya)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact