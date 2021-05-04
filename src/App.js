import React from "react";
import "./App.css";
import restaurant from "./restaurant.jpg"

function SecretComponent() {
  return <h1> A secret component just for authorized users</h1>
}

function RegularComponent() {
  return <h1> A regular component for all users</h1>
}

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
      <img src={restaurant} height={300} alt="resturante napkin and fork" />
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

function App(props) {
  if (props.authorized) {
    return (
      <div className="App">
        {props.authorized ? <SecretComponent /> : <RegularComponent />}
        <Header name="Cindy" />
        <MainSection adjective="amazing" categories={categoriesObjects} />
        <Footer year={new Date().getFullYear()} />
      </div>
    )
  }
}

export default App;
