const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');


const app = express();
const result = dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: "*",
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}));

const loginRouter = require('./routes/login');
const hrRouter = require("./routes/hr");


app.use("/auth", loginRouter);
app.use("/hr", hrRouter);


app.get("/hi", async (req, res) => {
    res.send("hi");
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});