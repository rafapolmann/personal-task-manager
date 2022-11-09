import express from "express";
import PgPromiseConnection from "./infra/database/PgPromiseConnection";
import BoardRepositoryDatabase from "./infra/repository/BoardRepositoryDatabase";
import ColumnRepositoryDatabase from "./infra/repository/ColumnRepositoryDatabase";
import BoardService from "./service/BoardService";
import CardService from "./service/CardService";
import ColumnService from "./service/ColumnService";

const app = express();
const connection = new PgPromiseConnection();
const boardRepository = new BoardRepositoryDatabase(connection);
const columnRepository = new ColumnRepositoryDatabase(connection);

app.get("/boards", async function (req, res) {
    const boardService = new BoardService(boardRepository);
    const boards = await boardService.getBoards();
    res.json(boards);
});

app.get("/boards/:idBoard/columns", async function (req, res) {
    const colunmsService = new ColumnService(columnRepository);
    const columns = await colunmsService.getColumns(parseInt(req.params.idBoard));
    res.json(columns);
});

app.get("/boards/:idBoard/columns/:idColumn/cards", async function (req, res) {
    const cardService = new CardService();
    const cards = await cardService.getCards(parseInt(req.params.idColumn));
    res.json(cards);
});

app.listen(3000);