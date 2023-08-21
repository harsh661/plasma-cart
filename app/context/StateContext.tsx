'use client'

import { ReactNode, createContext, useState } from "react";

interface ContextProps {
    cartItem: string | null
    totalPrice: number | null
    setCartItems: React.Dispatch<React.SetStateAction<null>>
    setTotalPrice: React.Dispatch<React.SetStateAction<null>>
}

export const StateContext = createContext<ContextProps | undefined>(undefined)

interface StateContextProviderProps {
    children: ReactNode
}

export const StateContextProvider: React.FC<StateContextProviderProps> = ({ children }) => {

    const [cartItem, setCartItems] = useState(null)
    const [totalPrice, setTotalPrice] = useState(null)

    return (
        <StateContext.Provider value={{cartItem, totalPrice, setCartItems, setTotalPrice}}>
            {children}
        </StateContext.Provider>
    )
}


