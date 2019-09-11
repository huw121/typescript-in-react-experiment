import React from 'react';
import { ContextConsumer } from '../Context'
import { IProductImages, IProduct } from './interfaces'

const Basket: React.FC = () => {
  return (
    <ContextConsumer>
      {context => {
        const [basket, updateBasket] = context
        if (!basket.length) return <h3>Nothing in your basket!</h3>
        const name: string = basket[0].name
        const price: number = basket[0].price
        const images: IProductImages[] = basket[0].images

        return (
          <main>
            <h1>Shopping Basket</h1>
            <article>
              <img src={images[0].src} alt="the product in the basket" />
              <h1>{name}</h1>
              <h3>Quantity:</h3>
              <button onClick={() => {
                updateBasket((prevBasket: IProduct[]) => {
                  return prevBasket.slice(0, -1)
                })
              }}>-</button>
              <h3>{basket.length}</h3>
              <button onClick={() => {
                updateBasket((prevBasket: IProduct[]) => {
                  return [...prevBasket, prevBasket[0]]
                })
              }}>+</button>
              <h2>Total: £{basket.length * price}</h2>
              <button onClick={() => {
                updateBasket(() => {
                  return []
                })
              }}>Remove</button>
            </article>
          </main>)
      }}
    </ContextConsumer>
  )
}

export default Basket;