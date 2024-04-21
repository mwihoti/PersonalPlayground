'use client'
import React from 'react'
import Link from 'next/link'
import ThemeButton from './layout/themeButton'
import { UserButton, useUser } from '@clerk/nextjs'


function Header() {
    const {isLoaded, user} = useUser();
    return (
        <div className=''>
            <nav className='p-10 flex  border-b '>
                <div>
                    <a href='/'>
                        Chat-app

                    </a>
                </div>
                <ul className='flex mx-auto gap-5 top-0 justify-between'>
                    <li className='font-bold'>

                        <Link href={'/'}>
                            Home
                        </Link>
                    </li>
                    <li className='font-bold'>

                        <Link href={'/product'}>

                            Products
                        </Link>
                    </li>
                    <li className='font-bold'>
                        <Link href={'/order'}>
                            Order
                        </Link>

                    </li>                

                </ul>
              
                <div className='flex gap-4'>
                    {
                        isLoaded && user && (
                            

                            <UserButton afterSignOutUrl='/' />

                        )
                        
                    }
               
               <ThemeButton />
                </div>
            </nav>
        </div>
    )
}

export default Header
