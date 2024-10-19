
import { useState, useEffect } from 'react';
import Time from '../components/Time';
import AppGrid from '../components/AppGrid';
import phoneBackground from "../assets/iosDefaultImage.jpeg";

function Phone() {

  return (
	<div className="bg-cover bg-center" style={{ backgroundImage: `url(${phoneBackground})` }}>
    <Time />
    <AppGrid />
  </div>
  )
}

export default Phone