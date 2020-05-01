export interface ProductTag {
  value: string
  type?: string
}

export interface ProductItemData {
  id: Number
  image: String
  name: String
  description: String
  price: number
  tags?: ProductTag[]
  isNew?: boolean
  isSure?: boolean
  artisan?: string
}
