import React, { Fragment, useState } from 'react'
import styles from './shopping.module.css'
import { useDispatch } from 'react-redux'
import { setCartList } from '../../redux/slices/cartlist'
import { useGetProductsQuery } from '../../redux/api/productsapi'
import { Product } from './interfaces'
import { ProductProps } from './types'

const Shopping = () => {
  const [state, setState] = useState({
    aboutHidden: true,
  })
  const dispatch = useDispatch()

  const { data, isLoading, error } = useGetProductsQuery(null)

  const addToCart = (item: Product | any, index: number) => {
    dispatch(setCartList(item))
  }

  const {
    grid,
    card,
    header,
    image,
    price: displayPrice,
    footer,
    aboutContainer,
    aboutHeader,
    arrow,
    codeLink
  } = styles

  const Grid = () => {
    return (
      <>
        <About />
        {error && <div>error</div>}
        {isLoading && <div>Loading...</div>}
        <div className={grid}>
          {data?.products?.map((item: Product, index: number) => (
            <Row item={item} index={index} />
          ))}
        </div>
      </>
    )
  }

  function toggleContent() {
    setState((prevState) => {
      return {
        aboutHidden: !prevState.aboutHidden,
      }
    })
  }

  function About() {
    return (
      <>
        <div className={aboutContainer}>
          <div onClick={toggleContent}>
            {
              state.aboutHidden && <span className={arrow}>▶</span>
  }
   {
              !state.aboutHidden && <span className={arrow}>▼</span>
  }
            <span className={aboutHeader}>
              {' '}
              About Online Shopping App
            </span>
          </div>
          {!state.aboutHidden && (
            <div>
              <p>
                <strong>
                  This web-based app is developed in{' '}
                  <span style={{ color: 'blue' }}>ReactJs</span> using{' '}
                  <span>TypeScript</span>.
                </strong>
              </p>
              <p>
                The following ReactJs features are used to develop this app:
                <ul>
                  <li>
                    (a) React Router is used to navigate across the application
                  </li>
                  <li>
                    (b) Redux Toolkit is used to maintain state across the
                    application
                  </li>
                  <li>
                    (c) RTK Query is used to fetch the fake JSON api data from a
                    remote server
                  </li>
                  <li>
                    (d) Custom Hook is used to encapsulate all business logic and API calls
                  </li>
                  <li>(e) CSS Module is used for styling the application</li>
                  <li>
                    (f) CSS Grid is used to tile the products and to make it responsive across devices
                  </li>
                </ul>
                <p>Source code of this app can be viewed at the following Github location:<br/>
                  <a title="Opens in another tab of this browser" className={codeLink} target="_blank" rel="noreferrer" href="https://github.com/noothanpanthayi/dashboard">View Source Code</a>
                  <span title="Opens in another tab of this browser" style={{color:'green'}}>◥</span>
                </p>
              </p>
            </div>
          )}
        </div>
      </>
    )
  }

  function Row({
    item,
    item: { id, title, price, images },
    index,
  }: ProductProps) {
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
