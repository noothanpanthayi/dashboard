import  {useState, useEffect} from 'react';

export const HttpGet=()=>{
    
    type Coffee = {
        title: string
        description: string
        ingredients: string[]
        image: string
        id: number
    }

    interface StateObj {
        coffeeListArr:Coffee[]
        completed:boolean
    }

    const [state, setState]=useState<StateObj>({
        coffeeListArr:[],
        completed:false
    })

    const getData=async()=>{

          const header=await fetch("https://api.sampleapis.com/coffee/hot");
          const coffeeListArr=await header.json();

          setState(prevState=>{
            return {
                ...prevState,
                coffeeListArr
            }
          })
    }
   
  
    useEffect(()=>{
        getData();
    },[]);
     

    return {data:state.coffeeListArr}

}