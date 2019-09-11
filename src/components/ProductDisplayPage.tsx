import React from 'react';
import { IProductImages, IProduct } from './interfaces';
import products from './products';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ContextConsumer } from '../Context'

const ProductDisplayPage: React.FC = () => {
  const name: string = products[0].name
  const description: string = products[0].description
  const price: number = products[0].price
  const images: IProductImages[] = products[0].images

  return (
    <article>
      <div style={{ width: "40vw" }}>
        <Carousel>
          {images.map(img => (
            <div>
              <img src={img.src} alt={img.description} />
            </div>
          ))}
        </Carousel>
      </div>
      <h1>{name}</h1>
      <p>{description}</p>
      <ContextConsumer>
        {context => {
          const [basket, updateBasket] = context
          return <div>
            <button onClick={() => {
              updateBasket((prevBasket: IProduct[]) => {
                return [...prevBasket, products[0]]
              })
            }}>
              Add To Basket
            </button>
          </div>
        }}
      </ContextConsumer>
      <h2>£{price}</h2>
    </article>
  );
}

export default ProductDisplayPage;