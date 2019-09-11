import React from 'react';
import { ContextConsumer } from '../Context'
import { IProductImages, IProduct } from './interfaces'
import { Product, Notice, ImportantInfo, ProductInfo, StyledButton, BasketImage, QuantityDisplay } from './reusableStyles';

const Basket: React.FC = () => {
  return (
    <ContextConsumer>
      {context => {
        const [basket, updateBasket] = context
        if (!basket.length) return <Notice>Nothing in your basket!</Notice>
        const name: string = basket[0].name
        const price: number = basket[0].price
        const images: IProductImages[] = basket[0].images

        return (
          <main>
            <Product>
              <BasketImage src={images[0].src} alt="the product in the basket" />
              <ProductInfo>
                <ImportantInfo>{name}</ImportantInfo>
                <h3>Quantity:</h3>
                <QuantityDisplay>
                  <StyledButton aria-label="Reduce quantity by 1" onClick={() => {
                    updateBasket((prevBasket: IProduct[]) => {
                      return prevBasket.slice(0, -1)
                    })
                  }}>-</StyledButton>
                  <h2>{basket.length}</h2>
                  <StyledButton aria-label="Increase quantity by 1" onClick={() => {
                    updateBasket((prevBasket: IProduct[]) => {
                      return [...prevBasket, prevBasket[0]]
                    })
                  }}>+</StyledButton>
                </QuantityDisplay>
                <StyledButton onClick={() => {
                  updateBasket(() => {
                    return []
                  })
                }}>Remove</StyledButton>
                <ImportantInfo>Total: £{basket.length * price}</ImportantInfo>
              </ProductInfo>
            </Product>
          </main>)
      }}
    </ContextConsumer>
  )
}

export default Basket;