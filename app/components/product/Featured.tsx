"use client"

import client from "@/app/lib/client"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import Heading from "../Heading"
import Grid from "../Grid"

const Featured = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const data = await client.fetch('*[_type == "product"]')
      setData(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  if (!data) return

  return (
    <div className="flex flex-col py-5">
      <Heading title="Featured Products" />
      <Grid>
        {data.map((item: any) => (
          <ProductCard key={item._id} data={...item} />
        ))}
      </Grid>
    </div>
  )
}

export default Featured
