import ironImageSources from './images/index'
import {IProduct, IProductImages} from './interfaces'

const ironImages: IProductImages[] = [
  {
    id: 1, 
    relatedSKU: 1,
    src: ironImageSources[0],
    description: "side facing picture of light blue steam iron"
  },
  {
    id: 2, 
    relatedSKU: 1,
    src: ironImageSources[1],
    description: "upright view of iron showing heat plate"
  },
  {
    id: 3, 
    relatedSKU: 1,
    src: ironImageSources[2],
    description: "action shot of iron in use"
  },
]

const products: IProduct[] = [
  {
    SKU: 1,
    name: "Steam Iron",
    description: `This steam iron is the perfect appliance for efficiently tackling your laundry pile. 
      Glide over your garments with ease using this light blue finished steam iron, whether it's the 
      last-minute shirt in the morning or the weekly pile of ironing, the My Iron has you covered for 
      all your ironing needs. With 1800W of power, My Iron can tackle the creases and crinkles that 
      you may face. The ceramic soleplate allows smooth and lightweight contact with garments for a 
      seamless glide and excellent results. The 120g steam shot emits enough steam to get the job done, 
      tackling tough materials and delicate clothes quickly and smoothly.`,
    price: 15,
    images: ironImages
  }
]

export default products
