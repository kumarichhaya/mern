export default function Customer({ data, index }) {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data.Name}</td>
            <td>{data.Email}</td>
            <td>{data.Contact}</td>
            <td>
                <ul>
                    {data.PurchasedBooks.map((book, i) => (
                        <li key={i}>
                            <em>{book.Bname}</em> by {book.Author} - <em>${book.Price}</em>
                        </li>
                    ))}
                </ul>
            </td>
        </tr>
    );
}
