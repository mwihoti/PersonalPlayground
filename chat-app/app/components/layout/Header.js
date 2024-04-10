
import React from 'react'
import Link from 'next/link'
import ThemeButton from './themeButton'


function Header() {
    return (
        <div className=''>
            <nav className='p-10 flex mx-auto'>
                <ul className='flex gap-5 top-0'>
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
                <div className=' ml-20'>
                <ThemeButton />
                </div>
                
            </nav>
        </div>
    )
}

export default Header
