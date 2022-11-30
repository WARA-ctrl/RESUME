import CardComponent from "./data/CardComponent";
import "./App.css";
import Data from "./data/Data";
import ReduxData from "./data/ReduxData";

function App() {
  return (
    <div className="App">
      <div className="react">
        <h1>My Project</h1>
        <h2>Using React</h2>
        <ul className="row">
          {Data.map((data, index) => {
            return <CardComponent key={index} {...data} />;
          })}
        </ul>
      </div>
      <div className="redux">
        <h2>Using Redux</h2>
        <ul className="row">
          {ReduxData.map((data, index) => {
            return <CardComponent key={index} {...data} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
