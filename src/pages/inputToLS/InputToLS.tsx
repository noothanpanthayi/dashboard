import React, { Fragment, useEffect, useRef } from 'react';
import styles from './ls.module.css';

const InputToLS = () => {

   const userInput=useRef<HTMLInputElement>(null);

   const saveName=(e:React.ChangeEvent<HTMLInputElement>)=>{

   const username=e.target.value;

    localStorage.setItem("username", e.target.value)

   }

   const getUserName=()=>{
    let userInputCurrent=userInput.current;
    const lsVal=localStorage.getItem("username");
     if (userInputCurrent){
      userInputCurrent.value=lsVal===null?' ':lsVal;
     }
   }

   useEffect(()=>{
    getUserName();
   },[])


  return <Fragment>

   <div className={container}>
    <label>Name: </label>
    <input type="text" id="name" onChange={saveName} ref={userInput}/>
   </div>

  </Fragment>
    
}

const {container}=styles;

export default InputToLS