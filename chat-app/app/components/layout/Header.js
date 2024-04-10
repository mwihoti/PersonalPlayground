
import React from 'react'
import Link from 'next/link'


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
            </nav>
        </div>
    )
}

export default Header
