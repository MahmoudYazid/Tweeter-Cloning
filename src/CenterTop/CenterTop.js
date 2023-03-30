import React, { useState } from 'react'
import './CenterTop.css'

import { AiOutlineSearch } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
export default function CenterTop() {
  const [Name,ChangeName]=useState("")
  const changeColourOnFocus =()=>{
    const MainDev = document.getElementById('SearchNav');
    MainDev.style.borderWidth="2px"
    MainDev.style.borderColor = "blue";
    MainDev.style.borderStyle = "solid";
    const AiOutlineSearchControl = document.getElementById("AiOutlineSearch");
    AiOutlineSearchControl.style.color="blue";
    if(Name==""){
      const output = (document.getElementById(
        "textSearchOutput"
      ).style.visibility = "hidden");

    }
  
  }
  const OnfocusOut =()=>{
    const MainDev = document.getElementById('SearchNav');
    MainDev.style.borderWidth="0px"
    MainDev.style.borderColor = "none";
    MainDev.style.borderStyle = "none";
    const inputdevcontrol = document.getElementById("SearchNav");
    inputdevcontrol.style.height = "4rem";
    const AiOutlineSearchControl =
      document.getElementById("AiOutlineSearch");
    AiOutlineSearchControl.style.color = "#71767b";
    
    document.getElementById("textSearchOutput").style.visibility="hidden";
  }
  return (
    <div className="SearchNav">
      <SlSocialTwitter className="SlSocialTwitter"></SlSocialTwitter>
      <div
        className="InputDiv"
        id="SearchNav"
       
      onFocus={OnfocusOut}
      >
        <AiOutlineSearch
          className="AiOutlineSearch"
          id="AiOutlineSearch"
        ></AiOutlineSearch>
        <div
          className="inputContainer"
          id="inputContainer"
        
          
          onBlur={OnfocusOut}
        >
          <input
            type="text"
            className="TextInput"
            onClick={changeColourOnFocus}
            onFocus={changeColourOnFocus}
            placeholder="Mahmoud Or Amir"
            onChange={(e) => {
              if (
                e.target.value == "amir" ||
                e.target.value == "am" ||
                e.target.value == "ami" ||
                e.target.value == "a"
              ) {
                document.getElementById("textSearchOutput").style.visibility =
                  "visible";
                const inputdevcontrol = document.getElementById("SearchNav");
                inputdevcontrol.style.height = "8rem";
                ChangeName("amir");
              }
              if (
                e.target.value == "mahmoud" ||
                e.target.value == "ma" ||
                e.target.value == "mah" ||
                e.target.value == "mahm" ||
                e.target.value == "mahmo" ||
                e.target.value == "mahmou" ||
                e.target.value == "m"
              ) {
                document.getElementById("textSearchOutput").style.visibility =
                  "visible";
                const inputdevcontrol = document.getElementById("SearchNav");
                inputdevcontrol.style.height = "8rem";
                ChangeName("mahmoud");
              }

              if (e.target.value.length == 0) {
                const MainDev = document.getElementById("SearchNav");
                MainDev.style.borderWidth = "0px";
                MainDev.style.borderColor = "none";
                MainDev.style.borderStyle = "none";
                const inputdevcontrol = document.getElementById("SearchNav");
                inputdevcontrol.style.height = "4rem";

                document.getElementById("textSearchOutput").style.visibility =
                  "hidden";
                ChangeName("");
              }
            }}
          ></input>
          <p id="textSearchOutput" style={{ visibility: "hidden" }}>
            {Name == "amir" ? (
              <a href="https://github.com/AmirMohamed1" className="LinkClass">
                Amir : frontend developer
              </a>
            ) : (
              <a href="https://github.com/MahmoudYazid" className="LinkClass">
                MahmoudYazid : frontend developer
              </a>
            )}
          </p>
        </div>
      </div>
      <div className="GrSettingsOptionDiv">
        <BsGear className="GrSettingsOption"></BsGear>
      </div>
    </div>
  );
}
