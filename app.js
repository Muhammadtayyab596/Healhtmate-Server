require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000; // or any PORT you prefer

const medicine_routes = require("./routes/medicine");
const connectDB = require("./db/connect");

// Allow all requests from the specified origin (http://localhost:3000)
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  res.send("Hello WOrld From backend");
});

app.use("/api/medicine", medicine_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
