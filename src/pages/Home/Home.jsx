import {React} from 'react'
import Hero from './Hero';
import NoUser from "../../components/NoUser";

const Home = (props) => {

  const isLoggedIn = window.localStorage.getItem('loggedIn');
  return (
    <>
        {isLoggedIn ? <Hero theme={props.theme}/> : <NoUser/>}
    </>
  )
}

export default Home