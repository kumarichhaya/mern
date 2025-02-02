import Book from "./Book"

function Books(){
    let Books =[
        {'Bname':'Python','Author':'Mark Lutz','Prize':80},
        {'Bname':'css','Author':'Mark Lutz','Prize':80},
        {'Bname':'java','Author':'Mark Lutz','Prize':80},
        {'Bname':'MERN','Author':'Mark Lutz','Prize':80}
    ]
    
    return(
        <section className="container padding">
        <h1 style={{'color':'red',backgroundColor:'yellow'}}>Array of Object using React</h1>
        <table width={600} cellPadding={10}  border={2}>
            <thead><tr><th></th><th></th><th></th><th></th></tr></thead>       
                <tbody>
                    {
                      Books.map((book,i)=>{
                        return (
                            <Book key={i} book={book}/>
                        )
                      })  
                    }
                </tbody>
        </table>
        </section>
    )

}
export default Books

// Method 1 of creating  react componenet