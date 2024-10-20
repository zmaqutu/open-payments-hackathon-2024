import NavBar from './components/Header/NavBar';
import "./components/Header/NavBar.css"
import SideView from "./components/SideView/SideView"
import "./components/SideView/SideView.css"
import Footer from "./components/Footer/Footer"
import "./components/Footer/Footer.css"
import AddUserForm from './components/AddUserForm/AddUser';
import "./components/AddUserForm/AddUser.css"
import ManageAccounts from './components/ManageAccounts/ManageAccounts';
import "./components/ManageAccounts/ManageAccounts.css"
import './App.css';
import { useState } from 'react'

function App() {
  const [showForm, setShowForm] = useState(false); 
  return (
    <div className='container'>
        <NavBar />
        <div className='middle-section'>
        <SideView setShowForm={setShowForm}/>
        {
          showForm ?
          <AddUserForm />
          : null
        }
        <ManageAccounts />
        </div>
        
        <Footer />
    </div>
  )
}

export default App;
