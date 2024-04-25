
import React from 'react';
import Link from 'next/link'
import Header from '@/app/components/Header';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'react-router-dom';


export default function Home() {

  const {userId } = auth();
  console.log(userId)
  if (userId) {
    redirect('/order')
  }
  return (
    

  
     
      <div>
   
    Home
      

      
      </div>
    
  );
}
