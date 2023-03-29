import React from "react";
import './css/style.css'
import './css/all.min.css'
export default function leftSide() {
  return (
    <div className="header">
      <div class="links">
        <a href="#">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="#">
          <i class="material-icons-outlined">tag</i>
          <span>Explore</span>
        </a>
        <a href="#">
          <i class="material-icons-outlined">settings</i>
          <span>Settings</span>
        </a>
      </div>
    </div>
  );
}
