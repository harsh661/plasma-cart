'use client'

import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { HiOutlineUsers } from "react-icons/hi2"
import {PiShoppingCartSimpleBold} from 'react-icons/pi'

const useRoutes = () => {
    const pathname = usePathname()

    const routes = useMemo(() => [
        {
            label: 'Cart',
            href: '/cart',
            icon: PiShoppingCartSimpleBold,
            active: pathname === '/'
        },
        {
            label: 'Profile',
            href: '/profile',
            icon: HiOutlineUsers,
            active: pathname === '/profile'
        },
    ], [pathname])

    return routes
}

export default useRoutes