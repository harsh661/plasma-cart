import { urlOf } from "@/app/lib/client"
import { useRouter } from "next/navigation"
import React from "react"

interface ProductCardProps {
  data: any
  notFixed?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({ data, notFixed }) => {
  const router = useRouter()
  const url = urlOf(data?.image[0]).toString()

  const handleClick = () => {
    router.push(`/product/${data._id}`)
  }
  return (
    <div onClick={handleClick} className={`flex flex-col flex-shrink-0 gap-2 rounded-md ${notFixed ? 'w-full' : 'w-44 sm:w-48 md:w-52 lg:w-56 xl:w-64 h-64 md:h-72 lg:h-80'}`}>
      <img src={url} alt="" className="rounded-md w-full object-cover h-3/4" />
      <div className="flex flex-col gap-1">
        <p className="font-medium text-black">{data?.name}</p>
        <p className="font-semibold">₹{data?.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
