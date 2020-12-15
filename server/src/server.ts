import express from 'express';
import bodyParser from 'body-parser';
import { listings } from './listings';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// GET listings
app.get('/listings', (_req, res) => {
  return res.send(listings);
});

// DELETE listing
app.post('/delete-listing', (req, res) => {
  const id: string = req.body.id;

  for (let i = 0; i < listings.length; i++) {
    if (listings[i].id === id) {
      return res.send(listings.splice(i, 1));
    }
  }
  return res.send('Listing not found');
});

app.listen(PORT, () => {
  console.log(
    `[server.ts]: Express server listening on http://localhost:${PORT}...`
  );
});
