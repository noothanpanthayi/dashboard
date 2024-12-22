import React from 'react'
import styles from './ssr.module.css';
const SSR = () => {
  return <>
  <div className={styles.container}>
        <iframe id="myIframe" className={styles.iframe} src="http://54.166.17.121/products" title="description"></iframe>
        </div>
        </>
}

export default SSR