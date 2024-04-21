
import React from 'react';
import Link from 'next/link'
import Header from '@/app/components/Header';
import { auth } from '@clerk/nextjs/dist/types/server';


export default function Home() {

  const {userId } = auth();
  if (userId) {
    redirect('/order')
  }
  return (
    

  
     
      <div>
   
    Home
      

      
      </div>
    
  );
}
