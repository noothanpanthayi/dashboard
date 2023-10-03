//////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Basic Types in TypeScript
//////////////////////////////////////////////////////////////////////////////////////////////////

import { Children, useRef, useState } from "react";

// number, string, boolean, string[], number[] (Array<string>, Array<number>)

let amount:number=100;
let username:string="John";
let veggie:boolean=false;
let usersList:string[]=['John','Jaffer','Hari'];
let usersAmount:number[]=[100,200,300];

let usersListNew:Array<string>=['John','Jaffer','Hari'];
let usersAmountNew:Array<number>=[100,200,300];

//////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Props
//////////////////////////////////////////////////////////////////////////////////////////////////

// When passing JSON array like an API response into a Child Component;
// eg. https://api.sampleapis.com/coffee/hot

const data=[
{
"title": "Black",
"description": "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
"ingredients": [
"Coffee"
],
"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
"id": 1
},

]

type Coffee = {
        title: string
        description: string
        ingredients: string[]
        image: string
        id: number
    }

 interface ChildProps {
        propsData:Coffee[]
        counter:number
    }

const CoffeeView=({propsData, counter}:ChildProps)=>{

}
    <CoffeeView propsData={data} counter={counter}/>

//////////////////////////////////////////////////////////////////////////////////////////////////
// 3. State
//////////////////////////////////////////////////////////////////////////////////////////////////

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

//TS self infer the following assignments, only for reference
const [counter, setCounter]=useState<number>(0);
const [text, setText]=useState<string>('');

The following is fine. 
const [counter, setCounter]=useState(0);
const [text, setText]=useState('');

//////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Events 
//////////////////////////////////////////////////////////////////////////////////////////////////

const updateTxt=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value)
  }

<input type="text" onChange={updateTxt}/>

const handleSubmit=(e:React.FormEvent)=>{
  <form onSubmit={handleSubmit}>
  </form>
  
//////////////////////////////////////////////////////////////////////////////////////////////////
// 5. functions and objects when passed into child components
//////////////////////////////////////////////////////////////////////////////////////////////////
type Msg={
    msg:string
  }

  type CoffeeEvent=React.ChangeEvent<HTMLInputElement>
  type CoffeeCounter=React.Dispatch<React.SetStateAction<number>>

interface ChildProps {
    incrementByTen:() => void;
    sendMessage:()=>string;
    sendObj:()=>Msg;
    sendArr:()=>Array<string|number>;
    updateTxt:(e:CoffeeEvent)=>void;
    setCounter:CoffeeCounter;
  }

  const updateTxt=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value)
  }

  const [counter, setCounter]=useState(0);

  const sendMessage=()=>{
    return "This is a message"
   }
  
   const sendObj=()=>{
    return {msg:'text'}
   }
  
   const sendArr=()=>{
    return ['Jerald', 'Nizar', 'Musthafa',12]
   }

  const CoffeeView=({propsData, setCounter, counter, incrementByTen, sendMessage, 
    sendObj, updateTxt}:ChildProps)=>{
    }

  <CoffeeView sendArr={sendArr} sendObj={sendObj} sendMessage={sendMessage} 
   setCounter={setCounter}/>

//////////////////////////////////////////////////////////////////////////////////////////////////
// 6. children
//////////////////////////////////////////////////////////////////////////////////////////////////

type SystemMessageProps={
    children:ReactNode
  }

const SystemMessage=({children}:SystemMessageProps)=>{
    return <>
        <h1>{children}</h1>
    </>
}

return <>
    <SystemMessage>
      <span>Message 1</span>
      <span>Message 2</span>
    </SystemMessage>
    </>

//////////////////////////////////////////////////////////////////////////////////////////////////
// 7. useref
//////////////////////////////////////////////////////////////////////////////////////////////////

const inputText=useRef<HTMLInputElement>(null);
<input type="text" ref={inputText}/>

//////////////////////////////////////////////////////////////////////////////////////////////////
// Summary
//////////////////////////////////////////////////////////////////////////////////////////////////

//Scenario 1

Event
e:React.ChangeEvent<HTMLInputElement>

useRef
const inputText=useRef<HTMLInputElement>(null);

Children
children:ReactNode

useState
const [state, setState]=useState<StateObj>({})

//Scenario 2
const userInput=useRef<HTMLInputElement>(null);

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

 <input type="text" id="name" onChange={saveName} ref={userInput}/>

//////////////////////////////////////////////////////////////////////////////////////////////////
// //Reference
//////////////////////////////////////////////////////////////////////////////////////////////////

//Convert JSON to Typescript
https://transform.tools/json-to-typescript

