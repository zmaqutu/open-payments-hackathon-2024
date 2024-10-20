import { useState } from 'react';
import { Modal, Box, Button, TextField } from '@mui/material';

function USSDPopup(props) {
	console.log(props)
	const [input, setInput] = useState('');

  const handleSend = () => {
    console.log('USSD Input:', input);
    // handleClose(); // Close popup after sending
  };
	return (
		<Modal open={props.open} onClose={handleSend}>
		  <Box
			sx={{
			  position: 'absolute',
			  top: '50%',
			  left: '50%',
			  transform: 'translate(-50%, -50%)',
			  width: 300,
			  bgcolor: 'background.paper',
			  borderRadius: 2,
			  boxShadow: 24,
			  p: 4,
			  textAlign: 'center',
			}}
		  >
			<h2 className="text-lg font-bold">USSD Menu</h2>
			<p>Select an option:</p>
			<ul className="list-none">
			  <li>1. Option One</li>
			  <li>2. Option Two</li>
			  <li>3. Option Three</li>
			</ul>
			
			<TextField
			  fullWidth
			  variant="outlined"
			  placeholder="Enter number"
			  value={input}
			  onChange={(e) => setInput(e.target.value)}
			  sx={{ marginTop: 2, marginBottom: 2 }}
			/>
	
			<div className="flex justify-between">
			  <Button variant="contained" color="primary" onClick={handleSend}>
				Send
			  </Button>
			  <Button variant="outlined" color="secondary" onClick={handleSend}>
				Cancel
			  </Button>
			</div>
		  </Box>
		</Modal>
	  );
}

export default USSDPopup;