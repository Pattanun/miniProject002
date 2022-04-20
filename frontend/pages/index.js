import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'


export default function Home() {

  return (
      <Navbar />
  )

  // return (
  //   <div className="bg-black">
  //   <h1>Welcome to SHOP GUITAR</h1>
  //   </div>
  // )

}



export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
