import React, {useState} from "react";
import "./App.css";
import restaurant from "./restaurant.jpg"

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

function App() {
  const [emotion, setEmotion] = useState("happy");

  return (
    <div className="App">
      <Header name="Cindy" />
      <MainSection adjective="amazing" categories={categoriesObjects} />
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <Footer year={new Date().getFullYear()} />
    </div>
  )
}

export default App;
