import { createAuthenticatedClient } from "@interledger/open-payments";



async function authorizationGrant() {
  const WALLET_ADRESS = "https://ilp.interledger-test.dev/payee";

  const client = await createAuthenticatedClient({
    walletAddressUrl: WALLET_ADRESS,
    keyId: "3fe3c869-7f14-479f-8a79-c758e4627243",
    privateKey: "./payee.key",
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

  console.log(grant);

  // Create incoming payment
  const incomingPayment = await client.incomingPayment.create(
    {
      url: new URL(WALLET_ADRESS).origin,
      accessToken: INCOMING_PAYMENT_ACCESS_TOKEN,
    },
    {
      walletAddress: WALLET_ADDRESS,
      incomingAmount: {
        value: "1000",
        assetCode: "USD",
        assetScale: 2,
      },
      expiresAt: new Date(Date.now() + 60_000 * 10).toISOString(),
    }
  );
}

authorizationGrant().catch(console.error);
