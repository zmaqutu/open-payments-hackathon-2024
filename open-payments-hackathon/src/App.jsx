import NavBar from './components/Header/NavBar';
import "./components/Header/NavBar.css"
import SideView from "./components/SideView/SideView"
import "./components/SideView/SideView.css"
import Footer from "./components/Footer/Footer"
import "./components/Footer/Footer.css"
import './App.css';

function App() {
  return (
    <div className='container'>
        <NavBar />
        <SideView />
        <Footer />
    </div>
  )
}

export default App;
