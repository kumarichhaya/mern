function Sinfo(){

    let sname = "Sneha" 
    let courses =['BCA,','MCA,','Bsc,','Msc']
    let fee={'AnnualFee':22000, 'fine':3000,'charges':4000}
    let percentage = 93.2
    let reg = true

    
return (
    <section className="container padding">
        <table><tbody>
        <tr><th>Name</th><td>{sname}</td></tr>
        <tr><th>courses</th><td><ul>
            {
              courses.map((c,i)=>{
              return (<li key={i}>{c}</li>)
            })
            }
          </ul></td></tr>
        <tr><th>percentage</th><td>{percentage}</td></tr>
        <tr><th>fee</th><td>{fee.AnnualFee}+{fee.charges}+{fee.charges}={fee.AnnualFee+fee.charges+fee.fine}</td></tr>
        <tr><th>Is Reg ?</th><td>{reg ? "yes" : "no"}</td></tr>
      </tbody>
      </table>

    </section>

)

}

export default Sinfo