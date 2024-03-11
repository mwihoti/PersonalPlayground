import React from 'react'

function HealthBot() {
  return (
    <div className=' p-20'>
<h1>Type your Symptoms and know what you are suffering from</h1>
<form className='m-4 border '>
<div className='m-2'>
    <label>Patient Symptoms</label><br/>
    <input type='text' placeholder='Your symptoms' className='h-20'/>
</div>
<button className='bg-blue-700 border rounded p-2'>
    Enter
</button>
</form>
<h1 className='text-sm'>
    Hello! I am Doctor Bot. Thanks for contacting.
</h1>
<div className=''>
    <textarea placeholder='You might be suffering from...' className='rounded'>

    </textarea>
</div>

    </div>
  )
}

export default HealthBot