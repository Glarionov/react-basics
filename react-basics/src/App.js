import logo from './logo.svg';
import './App.css';
import Counter1 from "./comonents/Counter1";
import Ifer from "./comonents/Ifer";
import Cycle from "./comonents/Cycle";

function App() {
  return (
    <div className="App">
      <Counter1/>
        <hr />
      <Ifer/>
        <hr/>
      <Cycle/>
    </div>
  );
}

export default App;
