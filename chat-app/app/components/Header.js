
import React from 'react'
import Link from 'next/link'
import ThemeButton from './layout/themeButton'


function Header() {
    return (
        <div className=''>
            <nav className='p-10 flex  border '>
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
              
                <div>
                <ThemeButton />

                </div>
            </nav>
        </div>
    )
}

export default Header
