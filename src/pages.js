import React from "react";
import {Link, Outlet, useLocation} from "react-router-dom";

export function Home() {
  return(
    <div>
      <h1>[Company Gallery]</h1>
      <nav>
        <Link to="about"> About </Link>
        <Link to="events"> Events </Link>
        <Link to="contact"> Contact </Link>
      </nav>
    </div>
  );
}

export function About() {
  return(
    <div>
      <h1>[About]</h1>
      <Outlet />
    </div>
  );
}

export function Services() {
  return(
    <div>
      <h2>Our services</h2>
    </div>
  );
}

export function CompanyHistory() {
  return(
    <div>
      <h2>Our History</h2>
    </div>
  );
}

export function Location() {
  return(
    <div>
      <h2>Location</h2>
    </div>
  );
}

export function Events() {
  return(
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Contact() {
  return(
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function Woops404() {
  let location = useLocation();
  return(
    <div>
      <h1>Resource not find at {location.pathname}!</h1>
    </div>
  );
}
