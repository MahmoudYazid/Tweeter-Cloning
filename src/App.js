
import './App.css';

import RightSide from './RightSide/RightSide';
import LeftSide from "./LeftSide/leftSide";
import  CenterPart from './CenterPart/CenterPart'
import Footer from './footer/footer'
function App() {
  return (
    <div className="MainPage">
      <div className="Upper">
        <LeftSide></LeftSide>
        <CenterPart></CenterPart>
        <RightSide></RightSide>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
