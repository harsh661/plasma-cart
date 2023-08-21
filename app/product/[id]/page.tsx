"use client"

import Counter from "@/app/components/inputs/Counter"
import InputButton from "@/app/components/inputs/InputButton"
import client, { urlOf } from "@/app/lib/client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const page = () => {
  const { id } = useParams()
  const [itemData, setItemData] = useState<any>(null)

  useEffect(() => {
    getData()
  }, [id, itemData])

  const getData = async () => {
    try {
      const data = await client.fetch(`*[_type == "product" && _id == "${id}"]`)
      setItemData(data[0])
    } catch (error) {
      console.log(error)
    }
  }

  if (!itemData) return <h1>Loading...</h1>

  const imageUrl = urlOf(itemData.image[0]).toString()

  return (
    <>
      <div className="max-w-[1400px] p-5 lg:px-10 mx-auto w-full lowercase font-medium text-zinc-500">
        categories / {itemData.category} /{" "}
        <b className="text-zinc-700">{itemData.name}</b>
      </div>
      <div className="max-w-[1400px] p-5 lg:px-10 mx-auto flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2">
          <img
            src={imageUrl}
            alt={itemData.name}
            className="w-full h-full aspect-square object-cover rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:px-5">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-4xl">{itemData.name}</h1>
            <p>{itemData.details}</p>

            <div className="py-5 border-y border-light-gray">
              <div className="text-2xl font-medium">₹{itemData.price}</div>
            </div>
            <Counter />
            <div className="flex flex-col md:flex-row gap-5 md: gap-10">
              <InputButton fill label="Buy Now" onClick={() => {}} />
              <InputButton label="Add to Cart" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
