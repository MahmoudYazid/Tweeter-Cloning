import React, { useState } from 'react'
import './CenterBottom.css'

export default function CenterBottom() {

    const [p, setP] = useState("Trending In Egypt");
    const [h3, setH3] = useState("البنك المركزى");

    return (
      <div className="center-bottom">
        <ul>
          <li
            onClick={() => {
              setP("Trending In Egypt");
              setH3("البنك المركزى");
            }}
          >
            <a href="#">For You</a>
          </li>
          <li
            onClick={() => {
              setP("Trending");
              setH3("أحمد_فهمى#");
            }}
          >
            <a href="#">Trending</a>
          </li>
          <li
            onClick={() => {
              setP("#DonaldTrump");
              setH3("Trending in Politics");
            }}
          >
            <a href="#">News</a>
          </li>
          <li
            onClick={() => {
              setP("Trending in Sports");
              setH3("#IPL2023");
            }}
          >
            <a href="#">Sports</a>
          </li>
          <li
            onClick={() => {
              setP("Trending");
              setH3("JUNGKOOK WORLD DOMINATION");
            }}
          >
            <a href="#">Entertainment</a>
          </li>
        </ul>

        <div className="card">
          <p>{p}</p>
          <div className="right">
            <span>...</span>
            <h3>{h3}</h3>
          </div>
        </div>
      </div>
    );
}