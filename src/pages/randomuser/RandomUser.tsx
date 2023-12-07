import React, { Fragment } from 'react'
import { User, useRandomfetch } from './useRandomfetch';

const RandomUser = () => {

  const {activeIndex, currentUser, prevUser, nextUser, usersList}:{currentUser:any,prevUser:any,nextUser:any,usersList:User[],activeIndex:any}= useRandomfetch("https://randomuser.me/api");

let prevName:any;
 if (activeIndex>=2){
     prevName=usersList[activeIndex-2];
 }

  return <>
    <div style={{border:'solid 3px green', marginTop:50}}>
   <h1>Previous User:{prevName?.name?.first}</h1>

    <h1>Current User:{currentUser?.name?.first}</h1>
        {
           usersList.length>0 && usersList.map(row=>{
               return <Fragment key={row.id.name}>
                  <div>{row.name.first}</div>
                </Fragment>
            })
        }
    </div>
    <button onClick={prevUser}>Prev User</button>
    <button onClick={nextUser}>Next User</button>
    </>
}

export default RandomUser;