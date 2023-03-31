import React from 'react';
import './Center.css';
import '../CenterTop/CenterTop'
import CenterTop from '../CenterTop/CenterTop';
import CenterBottom from "../CenterBottom/CenterBottom";
export default function CenterPart() {
  return (
    <div className="MainCenterPart">
      <CenterTop></CenterTop>
      <CenterBottom></CenterBottom>
      
    </div>
  );
}
