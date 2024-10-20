// this is a server that listens for incoming phone messages and sends them process Open Payment
import express from 'express';
import http from 'http';
// import WebSocket from 'ws';
import { WebSocketServer } from 'ws';

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });
import cors from 'cors';
// app.use(cors({
// 	origin: 'http://localhost:5174', // Change this to your frontend's origin if different
// 	methods: ['GET', 'POST'], // Specify the methods you're allowing
// 	credentials: false// If you need to include cookies or authentication headers
// }));
app.use(cors({
	origin: '*', // Allow all origins
}));

// Serve the frontend if needed
app.use(express.static('public'));

// WebSocket connection handling
wss.on('connection', (ws) => {
	console.log('Phone Client connected');

	// Listen for a specific request to trigger the popup
	app.get('/process-payment', (req, res) => {
		// Send a message to all connected WebSocket clients
		wss.clients.forEach((client) => {
			if (client.readyState === WebSocket.OPEN) {
				client.send(JSON.stringify({ action: 'process-payment' }));
			}
		});

		res.send('Payment processing initiated');
	});

	ws.on('close', () => {
		console.log('Client disconnected');
	});
});

// Start the server
const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

