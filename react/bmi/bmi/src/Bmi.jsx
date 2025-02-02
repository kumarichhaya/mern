import { useState } from "react";


function Bmi(){
    let [bmi,setBmi]=useState(0) 
    let [height , setHeight] = useState(4.3) 
    let [weight , setWeight]= useState(42) 
    let [message,setMessage]= useState('')

    const calculateBMI = (e) => {
       e.preventDefault();
        let h= height*0.3048
        console.log(h)
        let b=weight /(h**2)
        console.table(b)
        setBmi(b)
        
// condition ? expression_if_true : expression_if_false;
        setMessage(
            
            b < 18.5 ? "underweight." : b < 24.9  ? "normal weight.": b < 29.9 ? " overweight."  : "Obese."
                      
        );
      };
     
    return(
        <section>
            <div className="row justify-content-center py-5">
                <div className="col-5 text-capitalize">
                    <h2 className="text-center display-6 my-4">Body Mass Index</h2>
                <form>
                    <input type="number" placeholder="Height" min={4.3} max={8.11} step={0.1} value={height}
                     className="form-control mb-3 text" onChange={(e)=>{setHeight(e.target.value)}}/>
                    <input type="number" placeholder="Weight" min={43} max={120} step={0.1} value={weight} className="form-control mb-3" onChange={(e)=>{setWeight(e.target.value)}}/>
                    <button className="btn btn-info w-100 mt-4" onClick={ (e)=>calculateBMI(e)} >Calculate</button>
                </form>
                <h4 className="display-6 my-2 text-center">{bmi.toPrecision(4)}</h4>
                <p className="display-6 my-2 text-center">{message}</p>
                </div>
            </div>
       
        </section> 
    )
}
export default Bmi;