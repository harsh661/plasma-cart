import React from "react"
import {HiMiniArrowSmallRight} from 'react-icons/hi2'

interface ButtonProps {
    label: string
    action: ()=>void
}

const Button: React.FC<ButtonProps> = ({
    label,
    action,
}) => {
  return (
    <div className="cursor-pointer py-2 px-4 rounded-md bg-white text-black text-sm lg:text-base flex items-center gap-2 font-medium">
        {label}
        <HiMiniArrowSmallRight size={20}/>
    </div>
  )
}

export default Button