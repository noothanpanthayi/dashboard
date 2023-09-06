import React from 'react'
import styles from './home.module.css'
import ShoppingAbout from '../Shopping/About'
import WorldAbout from '../World/About'
import ToDoAbout from '../ToDo/About';

const Home = () => {
  return (
    <div className={container}>
      <div>Online Shopping</div>
      <ShoppingAbout />
      <WorldAbout />
      <ToDoAbout/>
      <div className={header}>Article in Medium</div>
      <a  className={externalLink} rel="noreferrer" 
      target="_blank" 
      href="https://medium.com/@noothankrishnan_88771/reactjs-patterns-for-delightful-dx-68a7ec795b70">ReactJs Patterns for Delightful DX</a>
</div>
 
  )

}

const {container, header, externalLink}=styles;


export default Home