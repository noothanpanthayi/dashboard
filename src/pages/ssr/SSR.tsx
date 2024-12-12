import React from 'react'
import styles from './ssr.module.css';
const SSR = () => {
  return <>
  <div className={styles.container}>
        <iframe id="myIframe" className={styles.iframe} src="https://main.d3ce7oqr41spe3.amplifyapp.com/products" title="description"></iframe>
        </div>
        </>
}

export default SSR