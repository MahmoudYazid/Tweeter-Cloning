
import './App.css';

import RightSide from './RightSide/RightSide';
import LeftSide from "./LeftSide/leftSide";
import  CenterPart from './CenterPart/CenterPart'
function App() {
  return (
    <div className="MainPage">
      <div className="Upper">
        <LeftSide></LeftSide>
        <CenterPart></CenterPart>
        <RightSide></RightSide>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
