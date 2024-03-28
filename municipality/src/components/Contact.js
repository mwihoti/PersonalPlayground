import React from 'react'

function Contact() {
  return (
    <div className='text-center'>
      <div className='bg-amber-900 p-20 text-5xl font-bold uppercase text-center'>Contact us</div>
      <div className='md:flex gap-10'>
        <div className='p-7'> 
          <h3>CONTACT US</h3>
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
          <article className='border-b pb-3'>
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
          <h3>SEND A MESSAGE</h3>
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
      <div>
        <h4>Address</h4>
        <iframe>
        https://www.google.com/maps/place/Mwea+Municipality+Primary+School,+B6,+Wamumu/@-0.7333314,37.3225421,17z/data=!4m15!1m8!3m7!1s0x18261f942ff92a23:0xd5b4861a01974df3!2sMwea+Municipality+Primary+School,+B6,+Wamumu!3b1!8m2!3d-0.7334015!4d37.3224365!16s%2Fg%2F11b8tf8nfn!3m5!1s0x18261f942ff92a23:0xd5b4861a01974df3!8m2!3d-0.7334015!4d37.3224365!16s%2Fg%2F11b8tf8nfn?entry=ttu

        </iframe>
      </div>
    </div>
  )
}

export default Contact