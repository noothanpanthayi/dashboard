import React, { useState, useEffect, Fragment } from 'react'
import styles from './formhandling.module.css'

function FormHandling() {
  const userDataObj={
    name:'',
    age:'',
    food:'',
    source:'',
    comments:'',
    movie:{
      action:false,
      horror:false,
      drama:false,
      thriller:false
    }

  }

  const [state, setState] = useState({
    userData:[],
    columnConfig: [
      {
        field: 'name',
        label: 'Name',
        type: 'text',
        required: true,
        constraints: 'should be in alphabets and not empty',
      },
      {
        field: 'age',
        label: 'Age',
        type: 'number',
        required: true,
        maxLength: 3,
        constraints: 'should be in alphabets and not empty',
      },
      {
        field: 'food',
        label: 'Food Preference',
        type: 'radio',
        options: [
          {
            label: 'Vegetarian',
            value: 'vegetarian',
          },
          {
            label: 'Non-Vegetarian',
            value: 'non-veg',
          },
        ],
        required: true,
        constraints: 'should be in alphabets and not empty',
      },
      {
        field: 'movie',
        label: 'Favorite Movie Genres',
        type: 'checkbox',
        options: [
          {
            label: 'Action',
            value: 'action',
          },
          {
            label: 'Horror',
            value: 'horror',
          },
          {
            label: 'Drama',
            value: 'drama',
          },
          {
            label: 'Thriller',
            value: 'thriller',
          },
        ],
        required: true,
        constraints: 'should be in alphabets and not empty',
      },
      {
        field: 'source',
        label: 'How did you hear about us',
        type: 'drop down list',
        required: true,
        constraints: 'should be in alphabets and not empty',
      },
      {
        field: 'comments',
        label: 'Comments',
        type: 'textarea',
        required: true,
        constraints: 'should be in alphabets',
      },
    ],
  })

  const addToUserData=(e)=>{
   const tempState={...state};
   if (!tempState.userData?.movie){
    tempState.userData.movie={
      movie:{
        action:false,
        horror:false,
        drama:false,
        thriller:false
      }
    }
   }
    tempState.userData={
        ...tempState.userData,
        [e.target.id]:e.target.id==="movie" ?[...tempState.userData.movie,e.target.value]:e.target.value
    }

    setState(prevState=>{
        return {
            ...prevState,
            userData:tempState.userData
        }
    })

  }

  useEffect(()=>{
    console.log("State ", state)
  })

  const getInputs = (column) => {
    switch (column.field) {
      case 'name':
        return <input id={column.field} onChange={addToUserData} type="text" />
      case 'age':
        return <input id={column.field} onChange={addToUserData} maxLength={column.maxLength} type="text" />
      case 'food':
        return (
          <div style={{ display: 'flex' }}>
            {column.options.map((option, index) => {
              return (
                <div key={index} style={{ display: 'flex' }}>
                  <label htmlFor={option.value}>{option.label}</label>
                  <div>
                    <input value={option.value} onChange={addToUserData} id={column.field} name={column.field} type="radio" />
                  </div>
                </div>
              )
            })}
          </div>
        )
      case 'movie':
        return (
          <div style={{ display: 'flex' }}>
            {column.options.map((option, index) => {
              return (
                <div key={index} style={{ display: 'flex' }}>
                  <label htmlFor={option.value}>{option.label}</label>
                  <div>
                    <input
                    onChange={addToUserData}
                     id={column.field}
                     checked={column}
                      name={column.field}
                      type="checkbox"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        )
      case 'comments':
        return <textarea type="text" />
      // return <input type="checkbox" />
      default:
        return <input type="text" maxLength={column.maxLength} />
    }
  }

  const doSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={card}>
      <div className={title}>Create Your Account</div>
      <form>
        {state.columnConfig.map((column, index) => {
          return (
            <Fragment key={index}>
              <label>{column.label}</label>
              <div>{getInputs(column)}</div>
            </Fragment>
          )
        })}
        <button onClick={doSubmit}>Submit</button>
      </form>
    </div>
  )
}

const { card, title } = styles

export default FormHandling
