import { Fragment } from 'react'
import styles from '../styles/cart.module.css'
import { CartItem } from '../types/interface'
import { ShoppingCartProps } from '../types/types'
import { useShoppingCart } from '../typescripts/useShoppingCart'

const ShoppingCart = () => {

  const { state, cartlist, deleteItem } = useShoppingCart()
  const { right, pointer, grid } = styles

  return (
    <div className={grid}>
      <Header />
      {cartlist?.map((row: CartItem, index: number) => (
        <Row row={row} index={index} />
      ))}
      <div>&nbsp;</div>
      <div className={right}>Total:</div>
      <div className={right}>{state.total.toFixed(2)}</div>
      <div>&nbsp;</div>
    </div>
  )

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
