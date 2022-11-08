import express from "express";
import pgp from "pg-promise";

const app = express();
const connection = pgp()("postgres://postgres:123456@localhost:5432/db_fullstack")
app.get("/boards", async function (req, res) {
    const boards = await connection.query("select * from board",[]);
    console.log(boards);
    res.json(boards);
});

app.listen(3000);