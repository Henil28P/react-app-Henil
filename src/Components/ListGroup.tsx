// import { MouseEvent } from "react";

// import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  // {item: string} => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  let items = ["New York", "San Franscisco", "London", "Tokyo", "Paris"];
  let selectedIndex = 0;
  // Below Hook function allows us to tap into built-in features (this is the State hook) - this tells react that this component has data or state that will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] // variable (selectedIndex)
  // arr[1] // updater function

  // Event Handler //
  // const handleClick = (event: MouseEvent) => console.log(event);

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item found</p> : null;
  // };

  return (
    <>
      <h1>{heading}</h1>
      {
        items.length === 0 && (
          <p>No item found</p>
        ) /* render results dynamically */
      }
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
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
