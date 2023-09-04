import React, { Fragment, useEffect, useState } from 'react'
import styles from './shopping.module.css'
import { useDispatch } from 'react-redux'
import { removeProduct, setCartList } from '../../redux/slices/cartlist'
import { useGetProductsQuery } from '../../redux/api/productsapi';

const Shopping = () => {
  const dispatch = useDispatch()

const {data,isLoading, error} =useGetProductsQuery(null);

  const addToCart = (item:Iproduct|any, index:number) => {
    dispatch(setCartList(item));
    
  }

  interface Iproduct {
    id:number,
    title:string,
    images:string[],
    price:number
  }

  const Grid = () => {
    return (
      <>
      {error&&<div>error</div>}
      {isLoading&&<div>Loading...</div>}
        <div className={styles.grid}>
          {data?.products?.map((item:Iproduct, index:number) => {
            return (
              <Fragment key={item.id}>
                <div className={styles.card}>
                  <div title={item.title} className={styles.header}>
                    {item.title.substr(0, 15)}
                    {item.title.length > 15 && '...'}
                  </div>
                  <div>
                    <img
                      className={styles.image}
                      alt="products"
                      src={item.images[0]}
                    />
                  </div>
                  <div className={styles.price}>Price:{item.price}</div>
                  <div className={styles.footer}>
                    <button onClick={() => addToCart(item, index)}>Add to Cart</button>
                  </div>
                </div>
              </Fragment>
            )
          })}
        </div>
      </>
    )
  }
  return (
      <Grid />
  )
}

export default Shopping
