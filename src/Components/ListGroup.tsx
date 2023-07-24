function ListGroup() {
  let items = ["New York", "San Franscisco", "London", "Tokyo", "Paris"];
  items = [];

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item found</p> : null;
  // };

  return (
    <>
      <h1>List</h1>
      {
        items.length === 0 && (
          <p>No item found</p>
        ) /* render results dynamically */
      }
      <ul className="list-group">
        {items.map((item) => (
          <li key="item">{item}</li>
        ))}
      </ul>
    </>
  ); // NOTE: In React, a component cannot return more then 1 HTML element
}

export default ListGroup;
