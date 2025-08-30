const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.post("/import", async (req, res) => {
  const { url, filename } = req.body;

  try {
    const response = await fetch(url);
    const text = await response.text();

    const filePath = path.join(__dirname, "uploads", filename);
    if (fs.existsSync(filePath)) {
          return res.status(400).send("Error: file already exists on the server");
        }
        
    fs.writeFileSync(filePath, text);

    res.send(`✅ Imported from ${url} → saved as ${filename}`);
  } catch (err) {
    res.status(500).send("❌ Error importing resource: " + err.message);
  }
});

app.listen(1337, () => {
  console.log("ImportTroubles running, good luck hackers!");
});
