import React, { useContext } from 'react'
import StarIcon from "@mui/icons-material/Star";
import "./CheckoutProducts.css" 
import { StateContext } from '../../../../App';
const CheckoutProducts = ({ id, title, image, price, rating }) => {
  const { dispatch } = useContext(StateContext);

  const removeItemFormBasket=()=>{
      // Add item to basket...
      dispatch({
        type: "REMOVE_FROM_BASKET",
        payload: {
          id:id,
          title:title,
          image:image,
          price:price,
          rating:5,
        }
      })
  
  

  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>₹ </small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {
            Array(rating)
              .fill()
              .map((_) => (
                <p><StarIcon className="checkoutProduct_rating_info" /></p>
              ))
          }

        </div>
        <button onClick={removeItemFormBasket}>Remove from basket</button>

      </div>
    </div>
  )
}

export default CheckoutProducts