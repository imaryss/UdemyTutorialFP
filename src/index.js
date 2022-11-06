import React from 'react'
import ReactDOM from 'react-dom'
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
function BookList() {
  return (
    <section>
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  )
}

const Image = () => (
  <img src='C:\Users\Maria\Desktop\rainbow-love-heart.jpg' alt='heart img' />
)

const Title = () => <h1>My first component in react</h1>
const Author = () => <h5>Mariana Ion</h5>
ReactDOM.render(<BookList />, document.getElementById('root'))
