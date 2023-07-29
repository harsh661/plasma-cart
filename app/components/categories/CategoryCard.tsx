import { urlOf } from '@/app/lib/client'
import React from 'react'
import Button from '../Button'
import Link from 'next/link'

interface CategoryCardProps{
    data: any
}

const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  return (
    <Link href={`/category/${data.slug.current}`} className='w-44 sm:w-48 md:w-52 lg:w-56 xl:w-64 flex-shrink-0 aspect-square bg-gray relative rounded-md overflow-hidden'>
        <img src={urlOf(data.image[0]).url()} alt={data.name} className='w-full h-full object-cover'/>
        <div className='absolute bg-black/10 hover:bg-black/40 transition-colors duration-200 inset-0 flex justify-center items-end pb-5'>
            <Button label={data.name} action={()=>{}}/>
        </div>
    </Link>
  )
}

export default CategoryCard