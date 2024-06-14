const express = require("express");
const path = require("path");
const dataFromDb = require("./database.js");

const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.get("/getBookStoreData", async (req, res) => {
  try {
    const data = await dataFromDb;
    console.log(data)
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
