import React from 'react'

const RightSidebar = ({user, transactions, banks}: RightSidebarProps) => {
  return (
   <aside className='right-sidebar'> 
    <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className='profile'>
            <div className='profile-img'>
                <span className='text-3xl font-bold text-blue-500'>{user.firstName.slice(0, 3)}</span>
            </div>
        </div>
    </section>
    </aside>
  )
}

export default RightSidebar