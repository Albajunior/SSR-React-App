import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import App from '../src/App';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('build'));

app.get('/', (req, res) => {
  const appMarkup = renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR React App</title>
      </head>
      <body>
        <div id="root">${appMarkup}</div>
        <script src="/static/js/main.chunk.js"></script>
        <script src="/static/js/0.chunk.js"></script>
        <script src="/static/js/2.chunk.js"></script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
