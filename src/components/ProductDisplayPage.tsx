import React from 'react';
import { IProductImages, IProduct } from './interfaces';
import products from './products';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ContextConsumer } from '../Context';
import styled from 'styled-components';

const ProductDisplayPage: React.FC = () => {

  const Product = styled.article`
    display: flex;
    margin: 1em
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `
  const ImageContainer = styled.div`
    padding: 1em;
  `
  const ProductInfo = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
  `
  const ImportantInfo = styled.h1`
    font-weight: bold;
    font-size: 2.5em;
  `
  const Description = styled.p`
    font-size: 1.3em;
  `
  const AddToBasket = styled.button`
    font-size: 1.3em;
    font-weight: bold;
    padding: 0.25em 1em;
    border: 1px solid #b20e53;
    background: white;
    color: #b20e53;
    &:hover {
      cursor: pointer;
    }
  `

  const name: string = products[0].name
  const description: string = products[0].description
  const price: number = products[0].price
  const images: IProductImages[] = products[0].images

  return (
    <Product>
      <ImageContainer>
        <Carousel>
          {images.map(img => (
            <div>
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
            const [basket, updateBasket] = context
            return (
              <AddToBasket onClick={() => {
                updateBasket((prevBasket: IProduct[]) => {
                  return [...prevBasket, products[0]]
                })
              }}>
                Add To Basket
              </AddToBasket>
            )
          }}
        </ContextConsumer>
        <ImportantInfo>£{price}</ImportantInfo>
      </ProductInfo>
    </Product>
  );
}

export default ProductDisplayPage;
