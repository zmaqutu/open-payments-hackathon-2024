const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const cors = require('cors');
app.use(cors());

// Serve the frontend if needed
app.use(express.static('public'));

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('Client connected');

  // Listen for a specific request to trigger the popup
  app.get('/trigger-popup', (req, res) => {
    // Send a message to all connected WebSocket clients
    console.log('Inside trigger popup')
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ action: 'show-popup' }));
      }
    });

    res.send('Popup triggered');
  });

  app.get('/process-payment', (req, res) => {
    // Send a message to all connected WebSocket clients
    console.log('Inside trigger popup')
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ action: 'process-payment' }));
      }
    });

    res.send('Popup triggered');
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

