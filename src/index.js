import React from "react";
import ReactDOM from "react-dom";
// reactDom is used to inject your JavaScript into the index.html file
//that will be displayed on the web page
function Greeting() {
  return <h4>this is john and this is my first component</h4>;
  //from the Greeting component we are returning html/ jsx
}
// in order for react to know that your function is a component
//you need to set your coomponent name with a capital letter
ReactDOM.render(<Greeting />, document.getElementById("root"));
//we are passing two things: whatever we are going to render
// and the where we are going to render
