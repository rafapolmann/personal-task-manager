import pgPromise from "pg-promise";
import Board from "../entity/Board";

export default class BoardService {

    constructor() {

    }

    async getBoards() {
        const connection = pgPromise()("postgres://postgres:123456@localhost:5432/db_fullstack")
        const boardsData = await connection.query("select id_board, name from board", []);
        const boards: Board[] = [];
        for (const boardData of boardsData) {
            const cardsData = await connection.query("select * from card join boardColumn using(id_boardColumn) where id_board = $1", [boardData.id_board]);
            let estimative = 0;
            for (const cardData of cardsData) {
                estimative += cardData.estimative;
            }
            const board = new Board(boardData.name)
            board.estimative = estimative;
            boards.push(board);
        }
        await connection.$pool.end();
        return boards;
    }
}