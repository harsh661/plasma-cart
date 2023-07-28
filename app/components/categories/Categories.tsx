"use client"

import client from "@/app/lib/client"
import { useEffect, useState } from "react"
import Grid from "../Grid"
import Heading from "../Heading"
import CategoryCard from "./CategoryCard"

const Categories = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const data = await client.fetch('*[_type == "categories"]')
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  if (!data) return null
  return (
    <div className="flex flex-col py-5">
        <Heading title="Discover Categories" />
        <Grid>
            {data.map((item: any) => (
                <CategoryCard key={item._id} data={...item}/>
            ))}
        </Grid>
    </div>
)
}

export default Categories
