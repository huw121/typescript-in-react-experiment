import React from 'react';
import { IProductImages, IProduct } from './interfaces';
import products from './products';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ContextConsumer } from '../Context';
import {Product, ImageContainer, ImportantInfo, ProductInfo, StyledButton, Description} from './reusableStyles';

const ProductDisplayPage: React.FC = () => {

  const name: string = products[0].name
  const description: string = products[0].description
  const price: number = products[0].price
  const images: IProductImages[] = products[0].images

  return (
    <Product>
      <ImageContainer>
        <Carousel>
          {images.map(img => (
            <div key={img.id}>
              <img src={img.src} alt={img.description} />
            </div>
          ))}
        </Carousel>
      </ImageContainer>
      <ProductInfo>
        <ImportantInfo>{name}</ImportantInfo>
        <Description>{description}</Description>
        <ContextConsumer>
          {context => {
            // eslint-disable-next-line
            const [basket, updateBasket] = context
            return (
              <StyledButton onClick={() => {
                updateBasket((prevBasket: IProduct[]) => {
                  return [...prevBasket, products[0]]
                })
              }}>
                Add To Basket
              </StyledButton>
            )
          }}
        </ContextConsumer>
        <ImportantInfo>£{price}</ImportantInfo>
      </ProductInfo>
    </Product>
  );
}

export default ProductDisplayPage;
