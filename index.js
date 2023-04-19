const axios = require('axios');

// copy-paste your URL provided in your Alchemy.com dashboard
const ALCHEMY_URL = "https://eth-sepolia.g.alchemy.com/v2/r-S61Ruo2XClLgXRDboSjNAtSEa0IHTS";

// axios.post(ALCHEMY_URL, {
//   jsonrpc: "2.0",
//   id: 1,
//   method: "eth_getBlockByNumber",
//   params: [
//     "0xb443", // block 46147
//     false  // retrieve the full transaction object in transactions array
//   ]
// }).then((response) => {
//   console.log(response.data.result);
// });


axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 0,
  method: "eth_getBalance",
  params: [
    "0x9eb96269d9b7a1dCfB66665baa10a14fA59c63A2",
    "latest"
  ]
}).then((response) => {
  console.log(response.data.result);
});