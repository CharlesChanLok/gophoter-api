const PORT = process.env.PORT || 3000;
import * as express from "express";
import { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Gophoter is running");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});