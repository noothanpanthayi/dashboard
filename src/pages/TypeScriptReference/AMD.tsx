import React, { FC, ReactNode, useRef, useState } from 'react';
import { HttpGet } from './getData';


//  type Root = Root2[]

 type Coffee = {
    title: string;
    description: string;
    ingredients: string[];
    image: string;
    id: number;
}

type Msg={
  msg:string;
}

type CoffeeEvent=React.ChangeEvent<HTMLInputElement>
type CoffeeCounter=React.Dispatch<React.SetStateAction<number>>

interface ChildProps {
  propsData:Coffee[];
  setCounter:CoffeeCounter;
  counter:number;
  incrementByTen:() => void;
  sendMessage:()=>string;
  sendObj:()=>Msg;
  sendArr:()=>Array<string|number>;
  updateTxt:(e:CoffeeEvent)=>void;
}

// const CoffeeView=({propsData}:{propsData:[]})=>{ 
// const CoffeeView=({propsData}:{propsData:Coffee[]})=>{ 

const CoffeeView=({propsData, setCounter, counter, incrementByTen, sendMessage, 
  sendObj, updateTxt}:ChildProps)=>{
  return <>
  <h1>{sendMessage()}</h1>
  <button onClick={()=>setCounter(counter+1)}>Increment</button>
  <button onClick={incrementByTen}>Increment by 10</button>
  <input type="text" onChange={updateTxt}/>
  {
    propsData.map(({id, title})=>{
      return <React.Fragment key={id}>
        <div>{title}</div>
      </React.Fragment>
    })
  }
  </>

}

type SystemMessageProps={
  children:ReactNode
}

const SystemMessage=({children}:SystemMessageProps)=>{
    return <>
        <h1 style={{color:'red'}}>{children}</h1>
    </>
}

const AMD = () => {
  const {data}=HttpGet();

 const [counter, setCounter]=useState<number>(0);
 const [text, setText]=useState<string>('');

 const incrementByTen=()=>{
  setCounter(counter + 10)
 }

 const sendMessage=()=>{
  return "This is a message"
 }

 const sendObj=()=>{
  return {msg:'text'}
 }

 const sendArr=()=>{
  return ['Jerald', 'Nizar', 'Musthafa',12]
 }

 const updateTxt=(e:React.ChangeEvent<HTMLInputElement>)=>{
   setText(e.target.value)
 }

 const inputText=useRef<HTMLInputElement>(null);

 const links=[
  'https://www.google.com',
  'https://www.microsoft.com'
 ] as const; //becomes specific and readOnly


let amount:number=100;
let name:string="John";
let veggie:boolean=false;
let usersList:string[]=['John','Jaffer','Hari'];
let usersAmount:number[]=[100,200,300];

let usersListNew:Array<string>=['John','Jaffer','Hari'];
let usersAmountNew:Array<number>=[100,200,300];



  return <>
    <div style={{marginTop:145}}>AMD</div>
    <input type="text" ref={inputText}/>
    <h1>Counter:{counter}</h1>
    <CoffeeView updateTxt={updateTxt} sendArr={sendArr} sendObj={sendObj} sendMessage={sendMessage} incrementByTen={incrementByTen} 
    propsData={data} counter={counter} setCounter={setCounter}/>
    <SystemMessage>
      <span>Message 1</span>
      <span>Message 2</span>
    </SystemMessage>
    </>
}

export default AMD