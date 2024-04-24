
import { getXataClient } from '@/src/xata'
import React from 'react'
import FolderForm from './FolderForm';

async function Order() {
  const xataClient = getXataClient();
  const folders = await xataClient.db.chat_table.getMany()
  return (
    <div>
     <h1 className='mb-4'> Order</h1> 
     <FolderForm />
     <div className='mb-4'>
     
     {
      folders.map(folder => <p key={folder.id}>{folder.name}</p>)
     }
</div>
    </div>
  )
}

export default Order