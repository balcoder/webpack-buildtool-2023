import _ from "lodash";
import "./style.css";
import hotel from "./hotel-2.jpg";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // add image to our existing div
  const hotelImg = new Image(); //similar to document.createElement('img')
  element.appendChild(hotelImg);

  return element;
}

document.body.appendChild(component());
