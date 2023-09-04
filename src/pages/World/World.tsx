import { Fragment } from 'react'
import { UseCountryInfo } from './UseCountryInfo'
import { WorldProps } from './types'
import styles from './world.module.css'

function World() {
  const {
    getUserInputTxt,
    response,
    error,
    loading,
    responseOkay,
  } = UseCountryInfo()

  const {
    container,
    searchContainer,
    inputLabel,
    textInput,
    userInputTxt,
    card,
    infoContainer,
    cardHeader,
    infoText,
    mapLink,
    image,
  } = styles

  return (
    <>
      <Fragment>
        <div className={container}>
          {error && <h2>Error Encountered, check the spelling!</h2>}
          {loading && <h2>Loading...</h2>}

          <div className={searchContainer}>
            <label className={inputLabel}>Type a Country Name</label>
            <input
              className={textInput}
              type="text"
              autoFocus
              onChange={getUserInputTxt}
              value={userInputTxt}
              placeholder="eg. type usa"
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

  function Row({ row, row: { name, capital, population }, index }: WorldProps) {
    return (
      <Fragment key={index}>
        <div className={card}>
          <div className={infoContainer}>
            <div className={cardHeader}>{name.official}</div>
            <div className={infoText}>
              <strong>Capital:</strong>
              {capital && capital[0]}
            </div>
            <div className={infoText}>
              <strong>Population:</strong>
              {population.toLocaleString('en-US')}
            </div>

            <div className={infoText}>
              <strong>Map:</strong>
              <a
                className={mapLink}
                href={row.maps.googleMaps}
                target="_blank"
                rel="noreferrer"
              >
                View in Google Map
              </a>
            </div>
          </div>

          <div>
            <img className={image} alt="flag" src={row.flags.png} />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default World
