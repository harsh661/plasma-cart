import React from 'react'
import {HiOutlineUser} from 'react-icons/hi'
import {PiShoppingCartSimpleBold} from 'react-icons/pi'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-5 lg:px-10 xl:px-20 py-5'>
        <h2 className='text-xl font-medium'>PlasmaCart</h2>
        <div className='flex items-center gap-5'>
            <PiShoppingCartSimpleBold size={22}/>
            <HiOutlineUser size={22} />
        </div>
    </div>
  )
}

export default Navbar