import "./App.css";
import Navbar from "./Component/Navbar";
import Terminal from "./Component/Terminal";

function App() {
  return (
    <div className=" bg-black text-green-400 font-mono">
      <Navbar />
      <Terminal />
    </div>
  );
}

export default App;
