import compression from 'compression';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import api from './api';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

if (!isProduction) {
  app.use(morgan('dev'));
} else {
  app.use(compression());
}

app.use(cors());

app.use('/api', api);

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Started on port ${port}`); // tslint:disable-line no-console
});

export default app;
