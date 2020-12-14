import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', (_req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(
    `[server.ts]: Express server listening on http://localhost:${PORT}...`
  );
});
