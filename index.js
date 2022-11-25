const express = require("express");
const app = express();

app.set("view engine", "ejs")

app.listen(process.env.port||3000, () => {
    console.log("server started")
});

app.get("/", (req, res) => {
    res.render("index")
})