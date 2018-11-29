
import * as express from "express";
import * as knex from 'knex';

import { Request, Response } from 'express';

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();
//const db = knex(knexfile[NODE_ENV]);
const db = knex({
    client: 'pg',
    connection: process.env.POSTGRES_URI
});
// const db = knex({
//     client: 'pg',
//     connection: {
//         host: process.env.DB_HOST,
//         database: process.env.POSTGRES_DB,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD
//       }
// });

app.get('/', (req: Request, res: Response) => {
    res.status(200).send("running");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});