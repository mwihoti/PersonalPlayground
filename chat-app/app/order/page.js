
import { getXataClient } from '@/src/xata'
import React from 'react'
import FolderForm from './FolderForm';
import {z} from 'zod';
import { revalidatePath } from 'next/cache';
const schema = z.object({
  name: z.string().min(5)
})
async function Order() {
  const xataClient = getXataClient();
  const folders = await xataClient.db.chat_table.getMany()
  async function createFolder (formData) {
    'use server';

    const parsedForm = schema.parse({
        name: formData.get('name')
    })
    const xataClient = getXataClient();
    await xataClient.db.chat_table.create(parsedForm)
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