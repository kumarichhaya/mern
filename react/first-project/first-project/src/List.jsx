import data from './data.json'
import Item from './item'

function List() {
    console.log(data)
    let comp_data=data.filter((d) => d.completed==true); 
    return (
        <>
            <ul className="list-group">
                {
                comp_data.map((t,i) => 
                    <Item key={i} todo={t} /> 
                )}
            </ul>
        </>
    );
}

export default List;
