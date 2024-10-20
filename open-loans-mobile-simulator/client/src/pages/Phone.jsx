
import { useState, useEffect } from 'react';
import Time from '../components/Time';
import AppGrid from '../components/AppGrid';
import phoneBackground from "../assets/iosDefaultImage.jpeg";
import USSDPopup from '../components/USSDPopup';

function Phone() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(false);
  const handleClosePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:5000'); // Update the port if necessary

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Received data:', data);

      // Check if the action is to show the popup
      if (data.action === 'show-popup') {
        setIsPopupOpen(true);
      }
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
	<div className="bg-cover bg-center" style={{ backgroundImage: `url(${phoneBackground})` }}>
    <Time />
    <AppGrid />
    <button
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={handleOpenPopup}
      ></button>
      <USSDPopup open={isPopupOpen} handleClose={handleClosePopup} />
  </div>
  )
}

export default Phone