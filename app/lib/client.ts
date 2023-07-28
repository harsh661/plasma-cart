import { client } from "@/sanity/lib/client"
import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

export default createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export const urlOf = (source: SanityImageSource) => builder.image(source)
