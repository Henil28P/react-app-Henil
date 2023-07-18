// This is a "Message" component
// PascalCasing
function Message() {
  // JSX: Javascript XML
  const name = "Henil";
  if (name) return <h1>Hello {name}</h1>; // instead of "name", we can pass in a function like getName()
  return <h1>Hello World</h1>; // So if the name constant is empty string, then this line will run
}

export default Message;
