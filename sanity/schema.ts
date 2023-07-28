import { type SchemaTypeDefinition } from 'sanity'
import banner from './types/banner'
import product from './types/product'
import categories from './types/categories'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, banner, categories],
}
