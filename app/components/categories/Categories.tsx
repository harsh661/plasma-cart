"use client"

import client from "@/app/lib/client"
import { useEffect, useState } from "react"
import Grid from "../Grid"
import Heading from "../Heading"
import CategoryCard from "./CategoryCard"
import Loading from "../Loading"

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

  return (
    <div className="flex flex-col py-5 px-5 lg:px-0">
        <Heading title="Discover Categories" />
        {data.length > 0 ? (
        <Grid>
            {data.map((item: any) => (
                <CategoryCard key={item._id} data={...item}/>
            ))}
        </Grid>
        ) : (
          <Loading />
        )}
    </div>
)
}

export default Categories
