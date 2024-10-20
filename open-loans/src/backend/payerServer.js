// Import necessary modules
import express from "express";
import { createAuthenticatedClient } from "@interledger/open-payments";
import fs from "fs";

const app = express();
const PORT = 3100; // Change to your preferred port

const WALLET_ADRESS = "https://ilp.interledger-test.dev/payee";

async function authorizationGrant(req, res) {
  try {
    const client = await createAuthenticatedClient({
      walletAddressUrl: WALLET_ADRESS,
      keyId: "3fe3c869-7f14-479f-8a79-c758e4627243",
      privateKey: fs.readFileSync("./payee.key"), // Read the private key
    });

    const walletAddress = await client.walletAddress.get({
      url: "https://ilp.interledger-test.dev/pay-later",
    });

    console.log("Address: " + walletAddress);

    // Request incoming payment grant
    const grant = await client.grant.request(
      {
        url: walletAddress.authServer,
      },
      {
        access_token: {
          access: [
            {
              type: "incoming-payment",
              actions: ["list", "read", "read-all", "complete", "create"],
            },
          ],
        },
      }
    );

    console.log("Grant:", grant);

    // Create incoming payment
    const incomingPayment = await client.incomingPayment.create(
      {
        url: new URL(WALLET_ADRESS).origin,
        accessToken: grant.access_token.value, // Use the grant's access token
      },
      {
        walletAddress: walletAddress.id, // Use the wallet address ID
        incomingAmount: {
          value: "50",
          assetCode: "USD",
          assetScale: 2,
        },
        expiresAt: new Date(Date.now() + 60_000 * 10).toISOString(),
      }
    );

    console.log("Incoming Payment:", incomingPayment);

    // Send success response
    res.status(200).json({ grant, incomingPayment });
  } catch (error) {
    console.error("Error during authorization grant:", error);
    res.status(500).send("Error during authorization grant: " + error.message);
  }
}

// Define the /grant endpoint
app.get("/grant", authorizationGrant);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
