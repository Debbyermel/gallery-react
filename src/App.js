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
      <p>Click on any of those {props.adjective} categories to start browsing</p>
      <ul style={{ listStyle: "none" }}>
        {props.categories.map((category) => (
          <li key={category.id}>{category.title}</li>))}
      </ul>
    </section >
  );
}

function Footer(props) {
  return (
    <footer>
      <p> Created my Deb| {props.year} copyright</p>
    </footer>
  );
}

const categories = [
  "Fashion",
  "Travel",
  "Minimal",
  "Tech",
  "Nature"
];

const categoriesObjects = categories.map((category, i) => ({ id: i, title: category }));

function App() {
  return (
    <div className="App">
      <Header name="Cindy" />
      <MainSection adjective="amazing" categories={categoriesObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
