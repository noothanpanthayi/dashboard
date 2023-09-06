import { Fragment } from 'react'
import { UseCountryInfo } from './UseCountryInfo'
import { WorldProps } from './types'
import styles from './world.module.css'
import About from './About'

function World() {
  const { getUserInputTxt, response, error, loading } = UseCountryInfo()
  //All functions are encapsulted in the above Custom Hook

  return (
    <>
      <About />
      <Fragment>
        <div className={container}>
          {error && (
            <div className={errorTxt}>Invalid or Empty Country Name!</div>
          )}
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
            {response.length > 0 &&
              response?.map((row, index) => {
                return <Row key={index} row={row} index={index} />
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
  errorTxt,
} = styles //fetching the styles from css module


export default World
