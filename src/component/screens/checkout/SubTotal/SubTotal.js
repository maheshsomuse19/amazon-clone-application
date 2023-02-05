import React,{useContext} from 'react'
import CurrencyFormat from 'react-currency-format'
import "./SubTotal.css"
import { StateContext } from '../../../../App';
function SubTotal() {
    const { state } = useContext(StateContext);

  return (
    <div className="subtotal">

        <CurrencyFormat
        renderText={(value)=>{
            <>
            <p>
                SubTotal ({state.basket.length} items):<strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal_gift">
                <input type="checkbox"/>This order contains a gift
            </small>
            </>
        }}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />
        SubTotal
    </div>
  )
}

export default SubTotal