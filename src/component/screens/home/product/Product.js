import React, { useContext } from 'react'
import StarIcon from "@mui/icons-material/Star";
import "./Product.css"
import { StateContext } from '../../../../App';
const Product = ({ id, title, image, price, rating }) => {

  const { dispatch } = useContext(StateContext);
  const addItemToBasket = () => {
    // Add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
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
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹ </small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
          {
            Array(rating)
              .fill()
              .map((_) => (
                <p><StarIcon style={{ color: "#ECC440" }} /></p>
              ))
          }

        </div>

      </div>
      <img src={image} alt="" />
      <div className="product_button">
        <button onClick={() => { addItemToBasket() }}>Add to basket</button>
      </div>

    </div>
  )
}

export default Product