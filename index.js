const translate = require("google-translate-cn-api");

const express = require("express");


const app = express();

const port = process.env.PORT || 3000;;
const domain = "com";



// express server
app.get("/", function (req, res) {
  const text = req.query.text;
  delete req.query.text;

  translate(text, { ...{ domain: domain }, ...req.query })
    .then((resp) => res.json(resp))
    .catch((resp) => res.status(400).json(resp));
});

app.listen(port, function () {
  console.log(
    "\n   ___ _____   ___\n" +
      "  / __|_   _| / __| ___ _ ___ _____ _ _\n" +
      " | (_ | | |   \\__ \\/ -_) '_\\ V / -_) '_|\n" +
      "  \\___| |_|   |___/\\___|_|  \\_/\\___|_|\n\n"
  );
  console.log(`App listening on port ${port}!`);
  console.log(
    `Default Google Translate domain: https://translate.google.${domain}/`
  );
  console.log("Incoming requests will be listed below:\n");
});

