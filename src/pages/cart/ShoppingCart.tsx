import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './cart.module.css'
import { removeItem } from '../../redux/slices/cartlist'
import { ICartList } from '../../interfaces/IcartList'
import { IreduxState } from '../../interfaces/state'

const ShoppingCart = () => {
  const [state, setState] = useState({
    total: 0,
  })

  interface Iproduct {
    id: string
    title: string
    description: string
    price: number
  }

  const dispatch = useDispatch()
  const { cartlist }: NonNullable<ICartList|any> = useSelector(
    (state: IreduxState) => state.cartlist,
  )

  const getTotal = () => {
    const total = cartlist.reduce((accum: number, row: Iproduct) => {
      return accum + row.price
    }, 0)

    setState((prevState) => {
      return {
        total,
      }
    })
  }

  useEffect(() => {
    getTotal()
  }, [cartlist])

  const deleteItem = (e: React.MouseEvent<HTMLSpanElement>) => {
    dispatch(removeItem(e.currentTarget.id))
  }

  return (
    <div className={styles.grid}>
      <div>Item</div>
      <div>Description</div>
      <div>Price</div>
      <div>Delete</div>
      {cartlist?.map((row: Iproduct) => {
        return (
          <Fragment key={row.id}>
            <div>{row.title} </div> <div>{row.description} </div>
            <div className={styles.right}>{row.price.toFixed(2)} </div>
            <div>
              <span id={row.id} onClick={deleteItem} className={styles.pointer}>
                🗑️
              </span>
            </div>
          </Fragment>
        )
      })}
      <div></div> <div className="styles.right">Total:</div>
      <div className={styles.right}>{state.total.toFixed(2)}</div>
      <div></div>
    </div>
  )
}

export default ShoppingCart
