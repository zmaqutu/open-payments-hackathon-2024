// /* eslint-disable no-undef */
import express from "express";
import {
  createAuthenticatedClient,
  isPendingGrant,
} from "@interledger/open-payments";

// const app = express();
// const PORT = 3000;

// // Define an asynchronous function to set up the client and log the wallet address
// async function setupClient() {
//   try {
//     const client = await createAuthenticatedClient({
//       walletAddressUrl: "https://ilp.interledger-test.dev/pay-later",
//       keyId: "fd37d668-95f3-452f-8e16-c399705f707a",
//       privateKey: "./private.key",
//     });

//     const walletAddress = await client.walletAddress.get({
//       url: "https://ilp.interledger-test.dev/pay-later",
//     });

//     const grant = await client.grant.request(
//       {
//         url: walletAddress.authServer,
//       },
//       {
//         access_token: {
//           access: [
//             {
//               identifier: walletAddress.id,
//               type: "outgoing-payment",
//               actions: ["list", "list-all", "read", "read-all", "create"],
//               //   limits: {
//               //     debitAmount: DEBIT_AMOUNT,
//               //     receiveAmount: RECEIVE_AMOUNT,
//               //   },
//             },
//           ],
//         },
//         interact: {
//           start: ["redirect"],
//           finish: {
//             method: "redirect",
//             uri: "http://localhost:3344",
//             nonce: "ThisIsATestNonce",
//           },
//         },
//       }
//     );

//     if (isPendingGrant(grant)) {
//       throw new Error("Expected non-interactive grant");
//     }

//     console.log("INCOMING_PAYMENT_ACCESS_TOKEN =", grant.access_token.value);
//     console.log(
//       "INCOMING_PAYMENT_ACCESS_TOKEN_MANAGE_URL = ",
//       grant.access_token.manage
//     );

//     console.log("GRANT", grant);
//   } catch (error) {
//     console.error("Error setting up client:", error);
//   }
// }

// // async function requestGrant(){
// //     const grant = await client.grant.request(
// //         {
// //           url: walletAddress.authServer,
// //         },
// //         {
// //           access_token: {
// //             access: [
// //               {
// //                 identifier: walletAddress.id,
// //                 type: "outgoing-payment",
// //                 actions: ["list", "list-all", "read", "read-all", "create"],
// //                 limits: {
// //                   debitAmount: DEBIT_AMOUNT,
// //                   receiveAmount: RECEIVE_AMOUNT,
// //                 },
// //               },
// //             ],
// //           },
// //           interact: {
// //             start: ["redirect"],
// //             finish: {
// //               method: "redirect",
// //               uri: "http://localhost:3344",
// //               nonce: NONCE,
// //             },
// //           },
// //         },
// //       );
// // }

// async function makePayment() {}

// // Start the Express server
// app.listen(PORT, async (error) => {
//   if (!error) {
//     console.log(`Server is running on http://localhost:${PORT}`);
//     await setupClient();
//   } else {
//     console.log("Error occurred, server can't start", error);
//   }
// });

const DEBIT_AMOUNT = 500;
const RECEIVE_AMOUNT = 300;

async function setupClient() {
  try {
    const client = await createAuthenticatedClient({
      walletAddressUrl: "https://ilp.interledger-test.dev/pay-later",
      keyId: "fd37d668-95f3-452f-8e16-c399705f707a",
      privateKey: "./private.key",
    });

    const walletAddress = await client.walletAddress.get({
      url: "https://ilp.interledger-test.dev/pay-later",
    });

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
            uri: "",
            nonce: "ThisIsATestNonce",
          },
        },
      }
    );

    if (!isPendingGrant(grant)) {
      throw new Error("Expected interactive grant");
    } else {
      // Redirect user to grant.manage URL
      console.log("Redirect user to:", grant.access_token.manage);
      console.log("INCOMING_PAYMENT_ACCESS_TOKEN =", grant.access_token.value);
      console.log("GRANT", grant);
      return;
    }
  } catch (error) {
    console.error("Error setting up client:", error);
  }
}

setupClient();
