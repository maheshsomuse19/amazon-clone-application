import React, { useContext } from 'react'
import { StateContext } from '../../../App';
import Header from '../../header/Header'
import "./Checkout.css"
import CheckoutProducts from './checkoutproducts/CheckoutProducts';
function Checkout() {
  const { state } = useContext(StateContext);

  return (
    <>
      <Header />

      <div className="checkout">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/FSI_cashback/2020/pc.jpg" />
        {
          state.basket?.length === 0 ? (
            <div className="checkout_title">
              <h2>Your Shopping is empty</h2>
              <p>
                You have no items in your basket. To buy one or more items, click "Add to basket" next to the item
              </p>
            </div>
          ) : (

            <div>
              <h2 className="checkout_title">Your Shopping basket</h2>

              {/* list of checkout products */}
              
              {
                state.basket.map((item)=>(
                  <CheckoutProducts 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}>
                  </CheckoutProducts>
                  
                ))
              }
            </div>

          )
        }

      </div>
    </>
  )
}

export default Checkout