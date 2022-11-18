import BoardService from "../../service/BoardService";
import CardService from "../../service/CardService";
import ColumnService from "../../service/ColumnService";
import Http from "../http/Http";

export default class BoardController {

    constructor(readonly http: Http, readonly boardService: BoardService, readonly columnService: ColumnService, readonly cardService: CardService) {
        http.route("get", "/boards", async function (params: any, body: any) {
            const boards = await boardService.getBoards();
            return boards;
        });

        http.route("get", "/boards/:idBoard", async function (params: any, body: any) {
            const board = await boardService.getBoard(params.idBoard);
            return board;
        });

        http.route("get", "/boards/:idBoard/columns", async function (params: any, body: any) {
            const columns = await columnService.getColumns(parseInt(params.idBoard));
            return columns;
        });

        http.route("get", "/boards/:idBoard/columns/:idColumn", async function (params: any, body: any) {
            const column = await columnService.getColumn(parseInt(params.idColumn));
            return column;
        });

        http.route("post", "/boards/:idBoard/columns", async function (params: any, body: any) {
            const idColumn = await columnService.saveColumn(body);
            return idColumn;
        });

        http.route("delete", "/boards/:idBoard/columns/:idColumn", async function (params: any, body: any) {
            await columnService.deleteColumn(parseInt(params.idColumn));
        });

        http.route("get", "/boards/:idBoard/columns/:idColumn/cards", async function (params: any, body: any) {
            const cards = await cardService.getCards(parseInt(params.idColumn));
            return cards;
        });

        http.route("post", "/boards/:idBoard/columns/:idColumn/cards", async function (params: any, body: any) {
            const idCard = await cardService.saveCard(body);
            return idCard;
        });

        http.route("delete", "/boards/:idBoard/columns/:idColumn/cards/:idCard", async function (params: any, body: any) {
            await cardService.deleteCard(parseInt(params.idCard));
        });

        http.route("put", "/boards/:idBoard/columns/:idColumn/cards/:idcard", async function (params: any, body: any) {
            await cardService.updateCard(body);
        });
        /*await this.httpClient.put(`${this.baseUrl}/boards/${card.idBoard}/columns/${card.idColumn}/cards/${card.idCard}`, card);*/
    }
}
