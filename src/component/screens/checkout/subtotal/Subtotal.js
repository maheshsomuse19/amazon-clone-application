import React, { useContext } from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { getBasketTotal, StateContext } from '../../../../App';
const Subtotal = () => {
    const { state } = useContext(StateContext);
    let totalBasketPrice = getBasketTotal(state?.basket);
    console.log(totalBasketPrice,"Vlaue")
    return (
        <div className="subtotal">

            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal({state?.basket.length} items):<strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/>This order contain a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={totalBasketPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal