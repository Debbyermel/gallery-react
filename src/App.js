import React from "react";
import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>{props.name} Gallery</h1>
    </header>
  );
}

function MainSection(props) {
  return (
    <section>
      <p>Click on any imagen to interect with this {props.adjective} it</p>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p> Created my Deb| {props.year} copyright</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Cindy" />
      <MainSection adjective="amazing" />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
