import { Fragment, useState} from 'react'
// import { useNavigate } from 'react-router-dom';
import styles from './shopping.module.css'
import { useDispatch } from 'react-redux'
import { setCartList } from '../../redux/slices/cartlist'
import { useGetProductsQuery } from '../../redux/api/productsapi'
import { Product } from './interfaces'
import { ProductProps } from './types'
import About from './About'
import Modal from './utils/Modal'


const Shopping = () => {
  const [dialogOpen, setDialogOpen]=useState(false);

  const [state, setState]=useState({
    dialogOpen:false,
    selectedItem:{}
  })

  const showDialog=()=>{
    setDialogOpen(true);
  }

  const closeDialog=()=>{
    setDialogOpen(false);
  }

  const dispatch = useDispatch();


  const { data, isLoading, error } = useGetProductsQuery(null) //fetch API using RTK Query

  const addToCart = (item: Product, index: number) => {
    console.log('Item ', item);
    setState(prevState=>{
      return {
        ...prevState,
        selectedItem:item
      }
    })
    showDialog();
    //updating the Redux State
    dispatch(setCartList(item));
  }

  const { grid, card, header, image, price: displayPrice, footer } = styles //fetching the styles from css module

  const Grid = () => {
    return <Fragment>
      <>
        <About />
        {error && <div>error</div>}
        {isLoading && <div>Loading...</div>}
        <div className={grid}>
          {data?.products?.map((
            item: Product,
            index: number, //Interface Product specifies the type for item
          ) => (
            <Row key={index} item={item} index={index} />
          ))}
        </div>
      </>
    <Modal dialogOpen={dialogOpen} closeDialog={closeDialog} selectedItem={state.selectedItem}/>
    </Fragment>
  }

  function Row({
    item,
    item: { id, title, description, price, images },
    index,
  }: ProductProps) {
    //Type ProductProps specifies the type for the props
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
