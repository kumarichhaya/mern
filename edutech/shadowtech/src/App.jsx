
import Header from "./header/Header"
import Footer from './footer/Footer'
import { Outlet } from "react-router";
function App() {
  

  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
