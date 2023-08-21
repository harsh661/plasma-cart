"use client"

import client from "@/app/lib/client"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import Heading from "../Heading"
import Grid from "../Grid"
import Loading from "../Loading"

const Featured = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const data = await client.fetch(
        '*[_type == "product" && isFeatured == true]'
      )
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col py-5 px-5 lg:px-0">
      <Heading title="Featured Products" />
      {data.length > 0 ? (
        <Grid>
          {data.map((item: any) => (
            <ProductCard key={item._id} data={...item} />
          ))}
        </Grid>
      ) : (
        <Loading details/>
      )}
    </div>
  )
}

export default Featured
