"use client"

import React, { useEffect, useState } from "react"
import client, { urlOf } from "../lib/client"
import Button from "./Button"

const Banner = () => {
  const [bannerData, setBannerData] = useState<any>()

  useEffect(() => {
    getBanner()
  }, [])

  const getBanner = async () => {
    try {
      const data = await client.fetch('*[_type == "banner"]')
      setBannerData(data[0])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={`${!bannerData && 'animate-pulse'} w-full h-60 md:h-64 lg:h-80 xl:h-96 bg-light-gray rounded-lg overflow-hidden relative`}>
      {bannerData && (
        <>
          <img
            src={urlOf(bannerData.image).url()}
            className="object-cover object-center w-full h-full"
          />

          <div className="bg-black/50 absolute inset-0 flex flex-col gap-5 items-center justify-center p-2 lg:p-10">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white max-w-3xl">
              {bannerData.largeText1}
            </h2>

            <Button label={bannerData.buttonText} action={() => {}} />
          </div>
        </>
      )}
    </div>
  )
}

export default Banner
