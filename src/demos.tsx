function Demos() {
  /*const element = createElement("div", {
    className: "container",
    children: ["Hello World", "Goodbye World"],
  }
    );*/
  const first = 'Joe';
  const element = <div className="container">Hello {first}</div>;


  console.log(element);
  return element;
}
export default Demos;
