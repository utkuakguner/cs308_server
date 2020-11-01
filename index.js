const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./routes")(app); 

app.listen(PORT, function () {
    console.log("Server started at port: " + PORT);
});