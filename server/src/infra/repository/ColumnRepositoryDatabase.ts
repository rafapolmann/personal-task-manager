import Column from "../../domain/entity/Column";
import ColumnRepository from "../../domain/repository/ColumnRepository";
import Connection from "../database/Connection";

export default class ColumnRepositoryDatabase implements ColumnRepository {

    constructor(readonly connection: Connection) {
    }

    async findAllByIdBoard(idBoard: number): Promise<Column[]> {
        const columnsData = await this.connection.query("select id_board, id_boardcolumn, name, has_estimative from boardColumn where id_board = $1", [idBoard]);
        const columns: Column[] = [];
        for (const columnData of columnsData) {
            columns.push(new Column(columnData.id_board, columnData.id_boardcolumn, columnData.name, columnData.has_estimative));
        }
        return columns;
    }

    async save(column: Column): Promise<number> {
        const [columnsData] = await this.connection.query("insert into boardColumn (id_board, name, has_estimative) values($1, $2, $3) returning id_boardcolumn", [column.idBoard, column.name, column.hasEstimative]);
        return columnsData.id_boardcolumn;
    }

    async get(idColumn: number): Promise<Column> {
        const [columnData] = await this.connection.query("select id_board, id_boardcolumn, name, has_estimative from boardColumn where id_boardcolumn = $1", [idColumn]);
        if (!columnData) throw new Error("Column not found");
        return new Column(columnData.id_board, columnData.id_boardcolumn, columnData.name, columnData.has_estimative);
    }

    async delete(idColumn: number): Promise<void> {
        await this.connection.query("delete from boardColumn where id_boardcolumn = $1", [idColumn]);
    }
}