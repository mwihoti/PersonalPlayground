
import { getXataClient } from '@/src/xata'
import React from 'react'
import FolderForm from './FolderForm';
import {z} from 'zod';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const schema = z.object({
  name: z.string().min(5)
})
async function Order() {
  const {userId } = auth();

  const xataClient = getXataClient();
  if(!userId){
    redirect('/')
  }
  const folders = await xataClient.db.chat_table.filter({
    userId
  }).getMany()
  async function createFolder (formData) {
    'use server';

    const parsedForm = schema.parse({
        name: formData.get('name')
    })

    const newRecord = {...parsedForm, userId}
    const xataClient = getXataClient();
    await xataClient.db.chat_table.create(newRecord)
    revalidatePath('/')
}
  return (
    <div>
     <h1 className='mb-4'> Order</h1> 
     <FolderForm handleCreateFolder={createFolder} />
     <div className='mb-4'>
     
     {
      folders.map(folder => <p key={folder.id}>{folder.name}</p>)
     }
</div>
    </div>
  )
}

export default Order