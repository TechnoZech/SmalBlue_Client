import {React, useEffect} from 'react'
import Hero from './Hero';

const Home = (props) => {
  return (
    <>
        <Hero theme={props.theme}/>
    </>
  )
}

export default Home