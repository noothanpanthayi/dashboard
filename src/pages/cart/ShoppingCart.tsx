import { Fragment } from 'react'
import styles from './cart.module.css'
import { CartItem } from './interface/interface'
import { ShoppingCartProps } from './interface/types'
import { useShoppingCart } from './useShoppingCart'

const ShoppingCart = () => {

  const { state, cartlist, deleteItem } = useShoppingCart();

  const Row = ({ row, index }: ShoppingCartProps) => { //or :React.ReactElement
    return (
      <Fragment key={index}>
        <div>{row.id} </div> <div>{row.description} </div>
        <div className={styles.right}>{row.price.toFixed(2)} </div>
        <div>
          <span data-id={index} onClick={deleteItem} className={styles.pointer}>
            🗑️
          </span>
        </div>
      </Fragment>
    )
  }

  return (
    <div className={styles.grid}>
      <div>Item</div>
      <div>Description</div>
      <div>Price</div>
      <div>Delete</div>
      {cartlist?.map((row: CartItem, index: number) => {
        return <Row key={row.id} row={row} index={index} />
      })}
      <div></div> <div className="styles.right">Total:</div>
      <div className={styles.right}>{state.total.toFixed(2)}</div>
      <div></div>
    </div>
  )
}

export default ShoppingCart
