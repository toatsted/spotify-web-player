const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./assets")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
})

app.listen(PORT, () => {
	console.log(`
	Local: localhost:${PORT}
	On Your Network: 192.168.1.100:${PORT}
		`);
});
