
import './App.css';
import './App.css'
import './RightSide/RightSide'
import RightSide from './RightSide/RightSide';
import LeftSide from "./LeftSide/leftSide";
function App() {
  return (
    <div className="MainPage">
      <div className="Upper">
        <LeftSide></LeftSide>
        <div className="Center"><p>dsdsdsds</p></div>
        <RightSide></RightSide>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
