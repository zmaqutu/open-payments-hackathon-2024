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
import Hero from './components/Hero/Hero';
import "./components/Hero/Hero.css"
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showManageAccounts, setShowManageAccounts] = useState(false)

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:5000'); // Update the port if necessary

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Received data:', data);

      // Check if the action is to show the popup
      if (data.action === 'process-payment') {
        // setIsPopupOpen(true);
        console.log('Payment processing initiated');
      }
      // else if (data.action === 'process-payment') {
      //   console.log('Payment processing initiated');
      // }
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      socket.close();
    };
  }, []);
  return (
    <div className='container'>
      <NavBar />
      <div className='middle-section'>
        <SideView setShowForm={setShowForm} setShowManageAccounts={setShowManageAccounts} />
        {!showForm && !showManageAccounts ?
          <Hero /> : null
        }
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
