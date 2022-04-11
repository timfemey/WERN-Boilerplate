const express = require("express");
const app = express();
const PORT = 8080;

app.get("/api", (req, res) => {
  res.send("<h3>Connection Successful!, Running :])</h3>");
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
