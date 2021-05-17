import userEvent from "@testing-library/user-event";
import React, {useReducer, useState, useEffect} from "react";
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
      <img src={restaurant} height={300} alt="restaurant napkin and fork" />
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

function App({login}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [emotion, setEmotion] = useState("happy");
  const [checked, toggle] = useReducer(
    (checked => !checked),
    false
    );

    useEffect(() => {
      if(!login) return;
      setLoading(true);
      fetch(`http://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
    }, [login]);

    if(loading) return <h1>Loading...</h1>;
    if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if(!data) return null;

    return (
      <div>
      <h1>{data.name}</h1>
      <h2>Hello from testing</h2>
      <p>{data.location}</p>
      <section className="App">
      <Header name="Cindy" />
      <MainSection adjective="amazing" categories={categoriesObjects} />
      <h1>Current emotion is {emotion}</h1>
      <p> No data</p>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{ checked ? "checked" : "No checked" }</p>
      <Footer year={new Date().getFullYear()} />
      </section>
      </div>
    );
}

export default App;
