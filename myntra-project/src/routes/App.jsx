import { Outlet } from "react-router-dom"
import Footer from "../componenets/Footer"
import Header from "../componenets/Header"



function App() {
 

  return (
    <>
      <Header/>
     <Outlet/>
      <Footer/>
    </>
  )
}

export default App
