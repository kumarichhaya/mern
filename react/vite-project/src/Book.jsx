export default function Book({book,key}){
    return(

        <tr className="container padding">
            <td>{key+1}</td>
            <td>{book.Bname}</td>
            <td>{book.Author}</td>
            <td>{book.Prize}</td>
        </tr>

    )

}