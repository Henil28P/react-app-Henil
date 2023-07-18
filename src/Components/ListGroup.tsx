function ListGroup() {
  const items = ["New York", "San Franscisco", "London", "Tokyo", "Paris"];

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li key="item">{item}</li>
        ))}
      </ul>
    </>
  ); // NOTE: In React, a component cannot return more then 1 HTML element
}

export default ListGroup;
