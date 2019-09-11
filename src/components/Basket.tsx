import React from 'react';
import {ContextConsumer} from '../Context'

const Basket: React.FC = () => {
  return (
    <ContextConsumer>
      {context => {
        const [basket, updateBasket] = context
        console.log(basket)
        return <div>
          <button onClick={() => {updateBasket((old: any) => {
            return [...old, 'b']
          })}}></button>
        </div>
      }}
    </ContextConsumer>
  )
}

export default Basket;