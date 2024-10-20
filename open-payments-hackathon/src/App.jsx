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
  const [showManageAccounts, setShowManageAccounts] = useState(false) 
  return (
    <div className='container'>
        <NavBar />
        <div className='middle-section'>
        <SideView setShowForm={setShowForm} setShowManageAccounts={setShowManageAccounts}/>
        {
          showForm && !showManageAccounts ?
          <AddUserForm />
          : null
        }{
          showManageAccounts ?
            <ManageAccounts /> :
            null
        }
        </div>
        
        <Footer />
    </div>
  )
}

export default App;
