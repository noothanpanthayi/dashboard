import React, { useState } from 'react';
import './style.css';

const Modal = ({dialogOpen, closeDialog, selectedItem}) => {
  const [state, setState] = useState({
    dialogOpen: false,
  });

const openDialog=()=>{
    setState(prevState=>{
        return {
            dialogOpen:!prevState.dialogOpen
        }
    })
}


  return (
    <>
      {dialogOpen && (
        <div className="overlay">
          <div className="dialogbox">
            <div className="closeIcon" >
              <div>&nbsp;</div>
              <div className="atocTxt">Add to Cart</div>
              <div onClick={closeDialog}>X</div>
            </div>
            <div>
              <div className="modalHdr">The following item has been added to the cart</div>
              <div><img alt="Product" height="100" src={selectedItem.images[0]}/></div>
              <div className='bold'><span className="atocInfo">Item:</span><span className='item'>{selectedItem.title}</span></div>
              <div className='bold'><span className="atocInfo">Price:</span><span className='item'>{selectedItem.price}</span></div>
            </div>
            <div className="buttonContainer"><button onClick={closeDialog}>Close</button></div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
