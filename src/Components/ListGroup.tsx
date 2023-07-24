import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Franscisco", "London", "Tokyo", "Paris"];

  // Event Handler //
  const handleClick = (event: MouseEvent) => console.log(event);

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
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
            /* Each property above is on separate line */
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  ); // NOTE: In React, a component cannot return more then 1 HTML element
}

export default ListGroup;
