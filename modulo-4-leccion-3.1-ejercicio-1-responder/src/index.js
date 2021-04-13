const express = require('express');
const cors = require('cors');

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// create app server
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints, more info about express response: https://expressjs.com/es/api.html#res

app.get('/response-a', (req, res) => {
  res.json({ result: 'ok' });
});

app.get('/response-b', (req, res) => {
  const htmlCode = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Express</title>
      </head>
      <body class="page">
        <header>
          <h1> Esta es una página de prueba.</h1>
        </header>
      </body>
    </html>`;
  res.send(htmlCode);
});

app.get('/response-c', (req, res) => {
  const randomNumber = Math.ceil(Math.random() * 10);
  const remainNumber = randomNumber % 2;
  if (remainNumber === 0) {
    res.redirect('https://www.youtube.com/');
  } else {
    res.redirect('https://www.instagram.com/');
  }
});
