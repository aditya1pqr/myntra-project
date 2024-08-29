import { Outlet } from "react-router-dom"
import Footer from "../componenets/Footer"
import Header from "../componenets/Header"
import LoadingSpinner from "../componenets/LoadingSpinner"
import FetchItems from "../componenets/FetchItems";
import { useSelector } from "react-redux";



function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header/>
      <FetchItems/>
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer/>
    </>
  )
}

export default App
