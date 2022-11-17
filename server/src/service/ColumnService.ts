import Column from "../domain/entity/Column";
import ColumnRepository from "../domain/repository/ColumnRepository";

export default class ColumnService {

    constructor(readonly columnRepository: ColumnRepository) {
    }

    async getColumns(idBoard: number) {
        const colunms = await this.columnRepository.findAllByIdBoard(idBoard);
        return colunms;
    }

    async saveColumn(input: SaveInput): Promise<number> {
        const idColumn = await this.columnRepository.save(new Column(input.idBoard, 1, input.name, input.hasEstimative));
        return idColumn;
    }

    async getColumn(idColumn: number): Promise<Column> {
        return await this.columnRepository.get(idColumn);
    }

    async deleteColumn(idColumn: number): Promise<void> {
        await this.columnRepository.delete(idColumn);
    }
}

type SaveInput = {
    idBoard: number,
    name: string,
    hasEstimative: boolean
}