import axios from "axios";
import Board from "../entities/Board";
import BoardService, { SaveColumnInput } from "./BoardService";

export default class BoardServiceHttp implements BoardService {

    async getBoard(idBoard: number): Promise<Board> {
        const response = await axios({
            url: `http://localhost:3000/boards/${idBoard}`,
            method: "get"
        });
        const boardData = response.data;
        const board = new Board(boardData.name);
        for (const columnData of boardData.columns) {
            board.addColumn(columnData.name, columnData.hasEstimative);
            for (const cardData of columnData.cards) {
                board.addCard(columnData.name, cardData.title, cardData.estimative);
            }
        }
        return board;
    }

    async saveColumn(column: SaveColumnInput): Promise<number> {
        const response = await axios({
            url: `http://localhost:3000/boards/${column.idBoard}/columns`,
            method: "post",
            data: column
        });
        const idColumn = response.data;
        return idColumn;
    }
}