import React, { Fragment } from 'react'
import { UseCountryInfo } from './UseCountryInfo'
import { WorldProps } from './types'
import styles from './world.module.css'

function World() {
  const {
    state,
    getUserInputTxt,
    response,
    error,
    errorMsg,
    loading,
    responseOkay,
  } = UseCountryInfo()

  const Row = ({ row, index }: WorldProps) => {
    return (
      <Fragment key={index}>
   
        <div className={styles.card}>
     
        <div style={{display:'flex', flexDirection:'column', }}>
        <div style={{fontSize:20, fontWeight:'bold', color:'blue',marginBottom:5}}>{row.name.official}</div>
        <div><strong>Capital:</strong>{row && row.capital && row?.capital[0]}</div>
        <div><strong>Population:</strong>{row?.population}</div>
     
        <div><strong>Map:</strong><a href={row.maps.googleMaps} target="_blank">View in Google Map</a></div>
        </div>
      

          <div><img className={styles.image} alt="flag" src={row.flags.png}  /></div>
        </div>
      </Fragment>
    )
  }

  return (
    <>
      <Fragment>
        <div className={styles.container}>
          {error && <h2>Error {errorMsg}</h2>}
          {loading && <h2>Loading...</h2>}
          <div style={{width:600,display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <label className={styles.inputLabel}>Type a Country Name</label><input
            className={styles.textInput}
            type="text"
            onChange={getUserInputTxt}
            value={state.userInputTxt}
            placeholder='eg. type USA'
          />
          </div>

          <div>
            {responseOkay(response) &&
              response?.map((row, index) => {
                return <Row row={row} index={index} />
              })}
          </div>
        </div>
      </Fragment>
    </>
  )
}

export default World

//Reference
// type WorldError={
//     errorObj:{
//         error:boolean
//         errorMsg:string
//     }
//   }

// type WorldLoading={
// loading:boolean
// }
//   const OnError = ({ errorObj }:WorldError) => {
//     return errorObj.error && <h2>Error {errorObj.errorMsg}</h2>
//   }

//   const OnLoading = ({ loading }:WorldLoading) => {
//     return loading && <h2>Loading...</h2>
//   }
