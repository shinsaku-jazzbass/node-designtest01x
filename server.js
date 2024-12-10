//Imports
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const infoRouter = require("./routes/info");
const serviceRouter = require("./routes/service");
const service2Router = require("./routes/service2");
const staffRouter = require("./routes/staff");
const faqRouter = require("./routes/faq");
const accessRouter = require("./routes/access");

const fs = require("fs");

const app = express();
const PORT = 5007;

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/images", express.static(__dirname + "public/images"));
app.use("/js", express.static(__dirname + "public/js"));

//Set Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/index.ejs");
app.set("view engine", "ejs");

var fliechk = fs.existsSync(__dirname + "/public/images/1.jpg");
//console.log(fliechk);

//Navigation
// app.get('', (req, res) => {
//     res.render('index');
// })
app.use("/", indexRouter);
app.use("/info", infoRouter);
app.use("/service", serviceRouter);
app.use("/service2", service2Router);
app.use("/staff", staffRouter);
app.use("/faq", faqRouter);
app.use("/access", accessRouter);

app.listen(PORT, () => console.log(`App lisetn on port ${PORT}`));
