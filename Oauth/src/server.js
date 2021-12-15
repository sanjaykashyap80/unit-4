const app = require("./index");
const connect = require("./configs/db");

app.listen(2345, async function () {
  await connect();
  console.log("listening on port 2345");
});


// JWT_ACCESS_KEY=web12training
// GOOGLE_CLIENT_ID=262468220794-h88ht3vdhcpq22tckmkdtk5oslpgtjbo.apps.googleusercontent.com
// GOOGLE_CLIENT_SECRET=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