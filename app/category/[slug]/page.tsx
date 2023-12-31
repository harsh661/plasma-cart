"use client"

import Heading from "@/app/components/Heading"
import ProductCard from "@/app/components/product/ProductCard"
import client, { urlOf } from "@/app/lib/client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const page = () => {
  const params = useParams()
  const [data, setData] = useState([])
  const [categoryData, setCategoryData] = useState<any>({})
  
  useEffect(() => {
    getData()
  }, [params.slug])

  const getData = async () => {
    try {
      const categoryData = await client.fetch(`*[_type == "categories" && name == "${params.slug}"]`)
      const data = await client.fetch(
        `*[_type == "product" && category == "${params.slug}"]`
      )
      setData(data)
      setCategoryData(categoryData[0])
    } catch (error) {
      console.log(error)
    }
  }

  if (!data || !categoryData.banner) return <h1>Loading...</h1>

  return (
    <div className="h-full lg:px-10 max-w-[1400px] mx-auto">
      <div className="w-full h-60 md:h-64 lg:h-80 xl:h-96 bg-light-gray lg:rounded-lg overflow-hidden relative">
        <img
          src={urlOf(categoryData.banner).url()}
          className="object-cover object-center w-full h-full"
        />
        <div className="bg-black/40 absolute inset-0 flex items-center justify-center text-3xl text-white font-bold p-5">
            <h2>Explore a wide range of {params.slug} collection</h2>
        </div>
      </div>
      <div className="px-5 lg:px-0">
        <Heading title={`Discover ${params.slug}`} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {data.map((item: any) => (
            <ProductCard key={item._id} data={...item} notFixed/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
