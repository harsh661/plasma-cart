import { type SchemaTypeDefinition } from 'sanity'
import banner from './types/banner'
import product from './types/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, banner],
}
