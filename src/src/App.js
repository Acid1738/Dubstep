import "./App.css";
import AddNew from "./Fetch/fetch";

function App() {
  return (
    <>
      <div >
        <input id="input" type="number" /> &nbsp;&nbsp;
        <button id="SaveAnime" onClick={AddNew}>
          Save
        </button>
      </div>
    </>
  );
}

export default App;
