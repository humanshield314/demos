import imgUrl from "./img/react-logo.png";
import './App.css'

function Demos() {
  /*const element = createElement("div", {
    className: "container",
    children: ["Hello World", "Goodbye World"],
  }
    );*/
  const logo = {
    name: "React Logo",
    title: "React Logo",
    path: imgUrl,
  };

  const element = (
    <img className="logo" src={logo.path} alt={logo.name} title={logo.title}/>
  );

  console.log(element);
  return element;
}
export default Demos;
