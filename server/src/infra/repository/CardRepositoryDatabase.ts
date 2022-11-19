import { textSpanIntersectsWith } from "typescript";
import Card from "../../domain/entity/Card";
import CardRepository from "../../domain/repository/CardRepository";
import Connection from "../database/Connection";

export default class CardRepositoryDatabase implements CardRepository {

    constructor(readonly connection: Connection) {
    }

    async findAllByIdColumn(idColumn: number): Promise<Card[]> {
        const cardsData = await this.connection.query("select id_card, id_boardcolumn, title, estimative from card where id_boardColumn = $1 order by id_card asc", [idColumn]);
        const cards: Card[] = [];
        for (const cardData of cardsData) {
            cards.push(new Card(cardData.id_boardcolumn, cardData.id_card, cardData.title, cardData.estimative));
        }
        return cards;
    }

    async save(card: Card): Promise<number> {
        const [cardData] = await this.connection.query("insert into card (id_boardColumn, title, estimative) values ($1, $2, $3) returning *", [card.idColumn, card.title, card.estimative]);
        return cardData.id_card;
    }

    async delete(idCard: number): Promise<void> {
        await this.connection.query("delete from card where id_card = $1", [idCard]);
    }

    async update(card: Card): Promise<void> {
        await this.connection.query("update card set title = $1, estimative = $2 where id_card = $3", [card.title, card.estimative, card.idCard]);
    }

    async updateIdColumnAndIndex(idCard: number, idColumn: number, index: number): Promise<void> {
        await this.connection.query("update card set id_boardColumn = $1, index = $2 where id_card = $3", [idColumn, index, idCard]);
    }
}