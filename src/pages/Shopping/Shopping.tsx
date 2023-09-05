import React, { Fragment, useState } from 'react'
import styles from './shopping.module.css'
import { useDispatch } from 'react-redux'
import { setCartList } from '../../redux/slices/cartlist'
import { useGetProductsQuery } from '../../redux/api/productsapi'
import { Product } from './interfaces'
import { ProductProps } from './types'
import About from './About'

const Shopping = () => {
  const dispatch = useDispatch()

  const { data, isLoading, error } = useGetProductsQuery(null); //fetch API using RTK Query

  const addToCart = (item: Product | any, index: number) => { //updating the Redux State
    dispatch(setCartList(item))
  }

  const { grid, card, header, image, price: displayPrice, footer } = styles //fetching the styles from css module

  const Grid = () => {
    return (
      <>
        <About />
        {error && <div>error</div>}
        {isLoading && <div>Loading...</div>}
        <div className={grid}>
          {data?.products?.map((item: Product, index: number) => ( //Interface Product specifies the type for item
            <Row key={index} item={item} index={index} />
          ))}
        </div>
      </>
    )
  }

  function Row({
    item,
    item: { id, title, price, images },
    index,
  }: ProductProps) { //Type ProductProps specifies the type for the props
    return (
      <Fragment key={id}>
        <div className={card}>
          <div title={title} className={header}>
            {title.substr(0, 15)}
            {title.length > 15 && '...'}
          </div>

          <img className={image} alt="products" src={images[0]} />

          <div className={displayPrice}>Price:{price}</div>

          <div className={footer}>
            <button onClick={() => addToCart(item, index)}>Add to Cart</button>
          </div>
        </div>
      </Fragment>
    )
  }

  return <Grid />
}

export default Shopping
