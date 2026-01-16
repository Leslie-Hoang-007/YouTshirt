
// const express = require("express");
// const app = express(); // takes express library and run it
// const cors = require("cors");
// const cookieParser = require('cookie-parser');

// const YOUR_DOMAIN = 'http://localhost:3000';
// // const YOUR_DOMAIN = 'https://www.mtgcollectionmanager.com';

// require("dotenv").config();

// // MIDDLEWARE
// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());// get data from client side from req.body objext
// app.use(cookieParser());
// app.use(cors({
//   origin: YOUR_DOMAIN, // Adjust this to the origin of your frontend application
//   // origin: 'https://www.mtgcollectionmanager.com', // Adjust this to the origin of your frontend application
//   // origin: `*`, // Adjust this to the origin of your frontend application
//   credentials: true
// }));

// app.options('*', cors()); // Enable preflight requests for all routes

// const port = 5000;
// // LISTEN
// app.listen(port, () => {// listen to port 5000
//   console.log("server has started on port 5000");

// }); 


const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server running");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));