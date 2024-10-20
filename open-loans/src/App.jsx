import HomePage from "./pages/HomePage";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;