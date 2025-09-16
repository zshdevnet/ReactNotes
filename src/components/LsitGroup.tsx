function ListGroup() {
    let items = ['Dushanbe','Khorugh','Gulbutta','Sakhobvat','Korvon','Kulob'];

    return (
        <>
            <h1>List Group</h1>
            {items.length === 0 && <p>no items found'</p>}
            <ul className="list-group">
                {items.map((item, index) =>
                    <li 
                    key={item} 
                    className="list-group-item"
                    onClick={() => console.log(item, index)}
                    >{item}</li>
                )}
            </ul>
        </>
    );
}

export default ListGroup;