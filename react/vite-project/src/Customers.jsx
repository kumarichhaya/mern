import Customer from "./Customer";

function Customers() {
    let customers = [
        {
            Name: 'Alice Johnson',
            Email: 'alice.johnson@example.com',
            Contact: '9876543210',
            PurchasedBooks: [
                { Bname: 'Python', Author: 'Mark Lutz', Price: 80 },
                { Bname: 'JavaScript', Author: 'David Flanagan', Price: 60 }
            ]
        },
        {
            Name: 'Bob Smith',
            Email: 'bob.smith@example.com',
            Contact: '9123456789',
            PurchasedBooks: [
                { Bname: 'CSS', Author: 'Mark Lutz', Price: 50 },
                { Bname: 'HTML5', Author: 'Bruce Lawson', Price: 40 }
            ]
        },
        {
            Name: 'Charlie Brown',
            Email: 'charlie.brown@example.com',
            Contact: '9988776655',
            PurchasedBooks: [
                { Bname: 'Java', Author: 'Herbert Schildt', Price: 70 },
                { Bname: 'MERN', Author: 'Mark Lutz', Price: 80 }
            ]
        },
        {
            Name: 'Daisy Miller',
            Email: 'daisy.miller@example.com',
            Contact: '9898989898',
            PurchasedBooks: [
                { Bname: 'ReactJS', Author: 'Robin Wieruch', Price: 90 },
                { Bname: 'NodeJS', Author: 'Andrew Mead', Price: 85 }
            ]
        }
    ];

    return (  
        <section className="container padding">
            <h1>Array of Object using React</h1>
            <table width={600} cellPadding={10} border={2}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Purchased Books</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((det, i) => (
                        <Customer key={i} data={det} index={i} />
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default Customers;
