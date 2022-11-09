import pgPromise from "pg-promise";
import Column from "../entity/Column";

export default class ColumnService {

    constructor() {

    }

    async getColumns(idBoard: number) {
        const connection = pgPromise()("postgres://postgres:123456@localhost:5432/db_fullstack")
        const columnsData = await connection.query("select name, has_estimative from boardColumn where id_board = $1", [idBoard]);
        const columns: Column[] = [];
        for (const columnData of columnsData) {
            columns.push(new Column(columnData.name, columnData.has_estimative));
        }
        await connection.$pool.end();
        return columns;
    }
}