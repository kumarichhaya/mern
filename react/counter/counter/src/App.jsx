import Counter from "./Counter"
import { useState } from "react";

function App() {
  let colors=["info","success","danger","warning"]
  let [color,setColor]=useState('info')

  return (
    <main className={"bg-"+color+"-subtle"} style={{height:"100vh"}}>
    <section className="container py-5 px-3 text-center">
      <Counter/>
      <div className="mt-5">
    {
      colors.map((c,i)=><button className="btn btn-outline-danger"  onClick={()=>setColor(c)} key={i}>{c}</button>)
    }
    </div>
    </section>

    </main>
  )
}

export default App
