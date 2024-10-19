import { useEffect, useState } from 'react'

function Time() {
	const [time, setTime] = useState('');

  // Update the time every second
  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setTime(currentTime);
    };

    const timer = setInterval(updateTime, 1000);
    updateTime(); // Call once immediately to set initial time

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  console.log('time', time)

  return (
    <div className="flex justify-center items-center h-8 bg-gray-200">
        {time}
    </div>
  )
}

export default Time