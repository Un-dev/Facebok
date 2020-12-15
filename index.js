import express from 'express';
import users from './routes/users.js';

const app = express();
const port = 8000;

app.use('/users', users);

app.listen(port, () => console.log(`The api is listening on port localhost:${port}!`));

export default app;