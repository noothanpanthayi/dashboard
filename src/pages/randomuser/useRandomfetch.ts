
import {useState, useEffect} from 'react';

const p=console.log;

export interface User {
    gender: string
    name: Name
    location: Location  
    email: string
    login: Login
    dob: Dob
    registered: Registered
    phone: string
    cell: string
    id: Id
    picture: Picture
    nat: string
  }
  
  export interface Name {
    title: string
    first: string
    last: string
  }
  
  export interface Location {
    street: Street
    city: string
    state: string
    country: string
    postcode: string
    coordinates: Coordinates
    timezone: Timezone
  }
  
  export interface Street {
    number: number
    name: string 
  }
  
  export interface Coordinates {
    latitude: string
    longitude: string
  }
  
  export interface Timezone {
    offset: string
    description: string
  }
  
  export interface Login {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
  }
  
  export interface Dob {
    date: string
    age: number
  }
  
  export interface Registered {
    date: string
    age: number
  }
  
  export interface Id {
    name: string
    value: string
  }
  
  export interface Picture {
    large: string
    medium: string
    thumbnail: string
  }
  

export const useRandomfetch=(url:string)=>{

const [state, setState]=useState({
    currentUser:{},
    nextUser:{},
    previousUser:{},
    usersList:[],
    loading:true,
    count:0,
    activeIndex:0
});

const doFetch=async()=>{
    if (state.activeIndex<state.usersList.length){


    }
    else {
        const header=await fetch(url);
        const data=await header.json();
        const currentUser:User=data.results[0];
    
        const tempState:any={...state}
        tempState.usersList=[...tempState.usersList, currentUser];
        tempState.previousUser=tempState.usersList[tempState.usersList - 1];
        tempState.activeIndex++
    
        setState(prevState=>{
            return {
                ...prevState,
                loading:false,
                currentUser,
                usersList:tempState.usersList,
                activeIndex:tempState.activeIndex
            }
        })
    }
   
}

const nextUser=()=>{
    const tempState={...state};
    if (state.activeIndex<state.usersList.length){
        tempState.activeIndex++;
    }
    else {
        doFetch();
    }
}

const prevUser=()=>{
    setState(prevState=>{
        return {
            ...prevState,
            activeIndex:--prevState.activeIndex
        }
    })
}

useEffect(()=>{
    doFetch();
},[]);

useEffect(()=>{
    p("State ",state);
})


return {currentUser:state.currentUser, nextUser,prevUser, usersList:state.usersList, previousUser:state.previousUser,
    activeIndex:state.activeIndex}




}