
function List(props) {
//  const fruits = ["apple", "orange", "bannana", "coconut"]

    const itemList = props.items;

    const listItems = itemList.map((fruit) => <li>{fruit.name}</li>)

    return(
    <>
    {listItems}
    </>
);
}

export default List