import React from 'react';
import styles from './home.module.css';
import  ShoppingAbout from '../Shopping/About';
import WorldAbout from '../World/About';

const Home = () => {


  return (
    <div className={styles.container}>
      <div>Online Shopping</div>
      <p>This application is developed in ReactJs incorporating TypeScript and Redux Toolkit.</p>
<ShoppingAbout/>
<WorldAbout/>

    </div>
  )
}

export default Home
