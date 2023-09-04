import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ICartList } from '../../interfaces/IcartList'
import { IreduxState } from '../../interfaces/state'
import { CartItem } from './interface/interface'
import { removeItem } from '../../redux/slices/cartlist'

// type SCReturns={
// state:{total:number},
// dispatch:React.Dispatch<any>,
// cartlist:NonNullable<ICartList | any>,
// deleteItem:React.MouseEvent<HTMLDivElement>
// }

export function useShoppingCart() {
  const [state, setState] = useState({
    total: 0,
  })

  const dispatch = useDispatch()

  const { cartlist }: NonNullable<ICartList | any> = useSelector(
    (state: IreduxState) => state.cartlist,
  )

  const getTotal = () => {
    let total = cartlist.reduce((accum: number, row: CartItem) => {
      return accum + row.price
    }, 0)

    setState((prevState) => {
      return {
        total,
      }
    })
  }

  const deleteItem = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.getAttribute('data-id')
    dispatch(removeItem(id))
  }

  useEffect(() => {
    getTotal()
  }, [])

  return { state, dispatch, cartlist, deleteItem }
}
