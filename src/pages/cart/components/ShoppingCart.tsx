import { Fragment } from 'react'
import styles from '../styles/cart.module.css'

import { CartItem } from '../types/interface'
import { ShoppingCartProps } from '../types/types'
import { useShoppingCart } from '../typescripts/useShoppingCart'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const ShoppingCart = () => {

  const { state, cartlist, deleteItem } = useShoppingCart()
  const { right, pointer, grid, bold, totalValue, navHomeButton, checkout } = styles;
  const navigate=useNavigate();

  useEffect(()=>{
    window.scrollTo({ top: 0, left: 0})
  },[])


  const HomePage=()=>{
    navigate('/shopping');

  }

  return <>    <div className={grid}>
      <Header />
      {cartlist?.map((row: CartItem, index: number) => (
        <Row key={index} row={row} index={index} />
      ))}
      <div>&nbsp;</div>
      <div className={`${right} ${bold}`}>Total:</div>
      <div className={`${right} ${totalValue}`}>{state.total.toFixed(2)}</div>
      <div>&nbsp;</div>
    </div>
    <div style={{display:'flex', justifyContent:'right'}}>
    <div className={`${navHomeButton} ${checkout}`} >Checkout</div>

    <div className={navHomeButton} onClick={HomePage}>Continue Shopping</div>

    </div>
    </>

  function Header() {
    return (
      <>
        <div>Item</div>
        <div>Description</div>
        <div>Price</div>
        <div>Delete</div>
      </>
    )
  }

  function Row({ row: { id, description, price }, index }: ShoppingCartProps) {
    return (
      <Fragment key={index}>
        <div>{id} </div> <div>{description} </div>
        <div className={right}>{price.toFixed(2)} </div>
        <div>
          <span data-id={index} onClick={deleteItem} className={pointer}>
            🗑️
          </span>
        </div>
      </Fragment>
    )
  }
}

export default ShoppingCart
