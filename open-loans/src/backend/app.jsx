// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Interledger API configuration
// const ILP_API_URL = process.env.ILP_API_URL;
// const ILP_SECRET = process.env.ILP_SECRET;

// // Create payment endpoint
// app.post('/api/payments', async (req, res) => {
//   const paymentDetails = req.body;

//   try {
//     const response = await axios.post(`${ILP_API_URL}/payments`, paymentDetails, {
//       headers: {
//         'Authorization': `Bearer ${ILP_SECRET}`,
//         'Content-Type': 'application/json',
//       },
//     });
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error("Error creating payment:", error);
//     res.status(500).json({ error: 'Payment creation failed' });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
