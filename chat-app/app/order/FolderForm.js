'use client'
import React, { useRef } from 'react'
import { getXataClient } from '@/src/xata';




export default function FolderForm({handleCreateFolder}) {
   
    const ref =  useRef(null);
  return (
    <form 
    className=' mb-4 w-full flex gap-x-2 items-center'
    action={(formData)=>
        {handleCreateFolder(formData);
            ref.current?.reset();
        }}
    ref={ref}
    >
        <div className='grow'>
            <label
            className='text-gray-300 text-sm font-bold mb-2 hidden'>
New name
            </label>
            <input className='shadow appearance-none border-2 border-gray-700 rounded w-full py-2 px-0text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-transparent'
            name="name"
            id="name"
            type='text'
            placeholder='myfolder'/>
        </div>
        <button className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32'>Submit</button>

    </form>
  )
}
