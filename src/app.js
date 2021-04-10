const express = require("express");
require("./db/conn");
const path = require("path");
const app = express();
const hbs = require("hbs");

const port = process.env.port || 3000;
const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");


app.use(express.static(staticPath));
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);

app.get("/", (req,res)=>{
    res.render("register");
});
app.listen(port,()=>{
    console.log(`Connection is setup at ${port}`);
})
