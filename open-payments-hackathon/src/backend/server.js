// /* eslint-disable no-undef */
import express from "express";
import {
  createAuthenticatedClient,
  isPendingGrant,
} from "@interledger/open-payments";
import fs from "fs";
import { Console } from "console";

const app = express();
const PORT = 3000; // You can change this port as needed

const DEBIT_AMOUNT = { value: "100", assetCode: "ZAR", assetScale: 2 }; //100;
const RECEIVE_AMOUNT = { value: "100", assetCode: "ZAR", assetScale: 2 }; //100;

async function setupClient(req, res) {
  try {
    const client = await createAuthenticatedClient({
      walletAddressUrl: "https://ilp.interledger-test.dev/pay-later",
      privateKey: fs.readFileSync("./private.key"),
      keyId: "fd37d668-95f3-452f-8e16-c399705f707a",
    });

    const walletAddress = await client.walletAddress.get({
      url: "https://ilp.interledger-test.dev/pay-later",
    });

    console.log(walletAddress.authServer);

    const grant = await client.grant.request(
      {
        url: walletAddress.authServer,
      },
      {
        access_token: {
          access: [
            {
              identifier: walletAddress.id,
              type: "outgoing-payment",
              actions: ["list", "list-all", "read", "read-all", "create"],
              limits: {
                debitAmount: DEBIT_AMOUNT,
                receiveAmount: RECEIVE_AMOUNT,
              },
            },
          ],
        },
        interact: {
          start: ["redirect"],
          finish: {
            method: "redirect",
            uri: "http://localhost:3000",
            nonce: "ThisIsATestNonce",
          },
        },
      }
    );

    if (!isPendingGrant(grant)) {
      throw new Error("Expected interactive grant");
    } else {
      console.log("Redirect user to:", grant.access_token.manage);
      console.log("INCOMING_PAYMENT_ACCESS_TOKEN =", grant.access_token.value);
      console.log("GRANT", grant);
      return res.redirect(grant.access_token.manage);
    }
  } catch (error) {
    console.error("Error setting up client:", error);
    return res.status(500).send("Error setting up client: " + error.message);
  }

  console.log(req.body);
}

app.get("/transact", setupClient);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
