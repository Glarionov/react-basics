import logo from './logo.svg';
import './App.css';
import Counter1 from "./comonents/Counter1";
import Ifer from "./comonents/Ifer";
import Cycle from "./comonents/Cycle";
import SimpleComments from "./comonents/SimpleComments";

function App() {
  return (
    <div className="App">
      <Counter1/>
        <hr />
      <Ifer/>
        <hr/>
      <Cycle/>
        <hr/>
        <SimpleComments/>
    </div>
  );
}

export default App;
