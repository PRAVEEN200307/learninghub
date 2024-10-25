import express from 'express';
import router from './routes/router.js';
import { connectDb } from './Database/db.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

connectDb();

app.locals.port = 5555;

app.get('/', (req, res) => {
    res.json({ welcome: "welcome to learning Hub" })
})

app.use('/hire', router)

app.listen(app.locals.port, () => {
    console.log(`server is runnig on http://localhost:${app.locals.port}`)
});