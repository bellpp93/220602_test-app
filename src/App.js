import React, { Component } from 'react'
import './App.css';

// Component는 리액트의 인프라이다.
class Subject extends Component {
  render() {  // 페이스북에서 만든 언어인 JSX 코드이다.
    return(
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}

class TOC extends Component {  // TOC(Table of Contents) 즉, 목차 개념
  render() {
    return(
      <nav>
        <ul><a href="#">HTML</a></ul>
        <ul><a href="#">CSS</a></ul>
        <ul><a href="#">JavaScript</a></ul>
        <ul><a href="#">React</a></ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return(
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Subject title='WEB' sub='world wide web!'></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;
