const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", { errorMessage: "" });
});

app.post("/submit", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.render("index", { errorMessage: "All fields are required!" });
    }

    res.send(`<h2>Form Submitted Successfully!</h2><p>Name: ${name}</p><p>Email: ${email}</p>`);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
