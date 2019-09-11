export interface IProductImages {
  id: number,
  relatedSKU: number,
  src: string,
  description: string
}

export interface IProduct {
  SKU: number,
  name: string,
  description: string,
  price: number,
  images: IProductImages[]
}
