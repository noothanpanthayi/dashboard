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
          <div className={styles.infoContainer}>
            <div className={styles.cardHeader}>{row.name.official}</div>
            <div className={styles.infoText}>
              <strong>Capital:</strong>
              {row && row.capital && row?.capital[0]}
            </div>
            <div className={styles.infoText}>
              <strong>Population:</strong>
              {(row?.population).toLocaleString('en-US')}
            </div>

            <div className={styles.infoText}>
              <strong>Map:</strong>
              <a
                className={styles.mapLink}
                href={row.maps.googleMaps}
                target="_blank"
                rel="noreferrer"
              >
                View in Google Map
              </a>
            </div>
          </div>

          <div>
            <img className={styles.image} alt="flag" src={row.flags.png} />
          </div>
        </div>
      </Fragment>
    )
  }

  return (
    <>
      <Fragment>
        <div className={styles.container}>
          {error && <h2>Error Encountered, check the spelling!</h2>}
          {loading && <h2>Loading...</h2>}
          <div className={styles.searchContainer}>
            <label className={styles.inputLabel}>Type a Country Name</label>
            <input
              className={styles.textInput}
              type="text"
              autoFocus
              onChange={getUserInputTxt}
              value={state.userInputTxt}
              placeholder="eg. type USA"
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
