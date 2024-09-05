const express = require("express");
require("dotenv").config();
const axios = require("axios").default
const cors = require("cors")
const app = express();
const corsOption = {
  origin: "*",
  allowedHeaders: ["Authorization", "Content-Type"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
};
app.use(cors(corsOption))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use("/user", UserRouter)

app.get("/", async (req, res) => {
    const response = await axios.post("https://trefle.io/api/auth/claim",{
        origin:"https://virtual-garden-blue.vercel.app",
        token: process.env.API_TOKEN
    },{
        headers:{
            "Content-Type" : "application/json"
        }
    })
    console.log(response.data)
  res.json({
    msg: "success",
    response:response.data
  });
});




// const start = async () => {
//   try {
//     const conn = await connectdb();
//     if (conn) {
//       app.listen(process.env.PORT, () => {
//         console.log(`cumming on port ${process.env.PORT}`);
//       });
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };

app.listen(process.env.PORT)

// start();
