import jsonServer from 'json-server';
import express from 'express';

const app = express();
const router = jsonServer.router('.public/db/app.json');

app.use('/api', router);

app.use(express.static('./build'));

app.get('*', (req, res) => {
  res.sendFile('/build/index.html', { root: '.' });
});

const PORT = process.env.PORT || 3131;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
