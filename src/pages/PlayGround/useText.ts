import React, {useState, useEffect} from 'react';

const useText=()=>{

    const [text, setText]=useState('AAAt');
    // let handler:any;
    // useEffect(()=>{
    //     return ()=>{
    //      clearTimeout(handler)
    //     }
    // })

     const updateText=(e:React.ChangeEvent<HTMLInputElement>)=>{
       let val:string=e.target.value;
       setText(val)
        //  handler=setTimeout((val:any)=>{
        //     setText(val)
        // },1) 
    }

    return {text, updateText}

 
  
}

export default useText