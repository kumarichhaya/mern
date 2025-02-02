import Sinfo from "./Sinfo"
import Poem from './Poem';
import Profile from "./Profile";
import Gallery from "./Gallery";
import Books from "./Books";
import Customer from "./Customers";
import Customers from "./Customers";
function App() {

  
  return (
    <section className="container padding">

      <h1>Hello</h1>
      <p>Learning React</p>
      
      <Sinfo/>
      <Poem/>
      <Profile/>
      <Gallery/>
      <Books/>
      <Customers/>

    </section>
    
  )
}

export default App


// 2nd Method of Creating Component