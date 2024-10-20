import { useState } from 'react';
import { Modal, Box, Button, TextField } from '@mui/material';

function USSDPopup(props) {
	console.log(props)
	const [input, setInput] = useState('');

	const handleSend = async () => {
		console.log('USSD Input:', input);
		switch (input) {
			case '1':
				console.log('Accepted Loan Terms');
				try {
					// Send a request to the server to trigger the popup
					const response = await fetch('http://localhost:5000/process-payment', {
						method: 'GET', // Use GET if that's how your server is set up
					});
					console.log('Response:', response);

					if (response.ok) {
						// If the response is okay, the server should handle showing the popup
						console.log('Payment processing initiated');
					} else {
						console.error('Failed');
					}
				} catch (error) {
					console.error('Error:', error);
				}
				break;
			case '2':
				console.log('Declined Loan Offer');
				break;
			case '3':
				console.log('Adjust Loan Application');
				break;
			default:
				console.log('Invalid option');
				break;
		}
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
				<p className="mt-2">Loan Terms:</p>
				<ul className="list-none">
					<li>1. Loan Amount: R5000</li>
					<li>2. Interest Rate: 5% per month</li>
					<li>3. Repayment Period: 6 months</li>
					<li>4. Total Repayment: R6000</li>
				</ul>

				<p className="mt-4">Select an option:</p>
				<ul className="list-none">
					<li>1. Accept Loan Terms</li>
					<li>2. Decline Loan Offer</li>
					<li>3. Adjust Loan Application</li>
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