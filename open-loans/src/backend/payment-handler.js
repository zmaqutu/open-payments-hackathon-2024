import express from "express";
import axios from "axios"; // For making HTTP requests

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Function to approve payment
const approvePayment = () => {
  console.log("Payment approved!");
};

// Endpoint to trigger payment pop up.

// Endpoint to handle incoming requests
app.post("/check-payment", async (req, res) => {
  try {
    const response = await axios.get("https://example.com/api/payment-status");

    if (response.data === true) {
      approvePayment();
      res.status(200).send("Payment approved!");
    } else {
      res.status(200).send("Payment not approved.");
    }
  } catch (error) {
    console.error("Error fetching payment status:", error);
    res.status(500).send("Error fetching payment status.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
