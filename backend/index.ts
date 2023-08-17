import cors from 'cors';
import express from 'express';
import fileDb from "./fileDb";
import postsRouter from "./routers/articles";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use('/posts', postsRouter);

const run = async () => {
    await fileDb.init();

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
};

run().catch(console.error);