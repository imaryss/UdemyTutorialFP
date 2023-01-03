import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// reactDom is used to inject your JavaScript into the index.html file
//that will be displayed on the web page
// function Greeting() {
//   return (
//     <div>
//       <h1>hello world</h1>
//     </div>
//   )
//   //from the Greeting component we are returning html/ jsx
// }
// in order for react to know that your function is a component
//you need to set your coomponent name with a capital letter

//?Another way  of writing a component
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world')
// }
// ReactDOM.render(<Greeting />, document.getElementById('root'))
//we are passing two things: whatever we are going to render
// and the where we are going to render
//*Book component example
// function BookList() {
//   return (
//     <section className="booklist">
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// }

// const Book = () => {
//   return (
//     <article className="book">
//       <Image></Image>
//       <Title></Title>
//       <Author></Author>
//     </article>
//   );
// };

// const Image = () => <img src="./images/book1.jpg" alt="Atomic Habits " />;

// const Title = () => <h1>Atomic Habits</h1>;
// const Author = () => <h5>James Clear</h5>;

//*JSX way to write components in react
function BookList() {
  return (
    <section className="booklist">
      <Book1 job="developer" />
      <Book2 title="random title" number={22} />
    </section>
  );
}

const Book1 = (props) => {
  console.log(props);
  const title = "Atomic Habits";
  const author = "James Clear";
  const img = "./images/book1.jpg";
  return (
    <article className="book">
      <img src={img} alt="title" />
      <h2>{title}</h2>
      <h4>{author.toLocaleUpperCase()}</h4>
      <p>{props.title}</p>
      <p>{props.job}</p>
      <p>{props.number}</p>
    </article>
  );
};

const Book2 = (props) => {
  console.log(props);
  const title = "Prince Harry The Duke of Sussex";
  const author = "Prince Harry";
  return (
    <div className="book">
      <img src="./images/book2.jpg" alt="Prince Harry" />
      <h2>{title}</h2>
      <h4>{author.toLocaleUpperCase()}</h4>
    </div>
  );
};
//*parameters
const someFunc = (param1, param2) => {
  console.log(param1, param2);
};
//*arguments
someFunc("job", "developer");

ReactDOM.render(<BookList />, document.getElementById("root"));
