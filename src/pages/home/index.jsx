import React, {useEffect} from 'react'
// import styles from './style.module.css'
import HomeComponent from '../../components/home';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HomeComponent/>
    </>
  )
}

export default Home