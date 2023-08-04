import 'dotenv/config';
import app from './app';
import db from './database/db';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server running on port 3000');
  db.on('error', console.log.bind(console, 'Erro de connection'));
  db.once('open', () => {
    console.log('Database is connection!');
  });
});
