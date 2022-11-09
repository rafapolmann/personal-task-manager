import pgPromise from "pg-promise";
import Card from "../entity/Card";

export default class CardService {

    constructor() {

    }

    async getCards(idColumn: number) {
        const connection = pgPromise()("postgres://postgres:123456@localhost:5432/db_fullstack")
        const cardsData = await connection.query("select title, estimative from card where id_boardColumn = $1", [idColumn]);
        const cards: Card[] = [];
        for (const cardData of cardsData) {
            cards.push(new Card(cardData.title, cardData.estimative));
        }
        await connection.$pool.end();
        return cards;
    }
}