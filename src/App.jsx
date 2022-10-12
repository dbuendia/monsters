import "../src/styles/App.css";
import FilterPage from "./components/FilterPage";
import Ratings from "./components/Ratings";
import Worship from "./components/Worship";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/monsters/" element={<FilterPage />} />
        <Route path="/monsters/rating/" element={<Ratings />} />
        <Route path="/monsters/worship/" element={<Worship />} />
      </Routes>
    </div>
  );
}

export default App;
