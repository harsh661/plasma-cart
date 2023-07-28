"use client"

import React, { useEffect, useState } from "react"
import client, { urlOf } from "../lib/client"
import Button from "./Button"

interface BannerProps {
  isHero?: boolean
}

const Banner: React.FC<BannerProps> = ({ isHero }) => {
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

  if (!bannerData)
    return (
      <div
        className={`w-full h-60 md:h-64 lg:h-80 xl:h-96 bg-light-gray rounded-lg overflow-hidden relative animate-pulse ${
          !isHero && "h--40 md:h-48 lg:h-56 xl:h-60"
        }`}
      />
    )

  return (
    <>
      {isHero ? (
        <div
          className={`w-full h-60 md:h-64 lg:h-80 xl:h-96 bg-light-gray rounded-lg overflow-hidden relative`}
        >
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
        </div>
      ) : (
        <div
          className={`flex items-center w-full h-40 md:h-48 lg:h-56 xl:h-60 bg-black rounded-lg overflow-hidden`}
        >
          <img
            src={urlOf(bannerData.saleImage).url()}
            alt=""
            className="hidden md:block h-full w-auto"
          />
          <div className="flex flex-col gap-3 text-white px-5">
            <div className="font-bold text-5xl">{bannerData.discount} <span className="text-lg text-gray">off</span></div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center max-w-3xl">
              {bannerData.largeText2}
            </h2>
          </div>
        </div>
      )}
    </>
  )
}

export default Banner
