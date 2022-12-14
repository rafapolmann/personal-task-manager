import Card from "../domain/entity/Card";
import CardRepository from "../domain/repository/CardRepository";

export default class CardService {

    constructor(readonly cardRepository: CardRepository) {
    }

    async getCards(idColumn: number) {
        const cards = await this.cardRepository.findAllByIdColumn(idColumn);
        return cards;
    }

    async getCard(idCard: number) {
        const card = await this.cardRepository.get(idCard);
        return card;
    }

    async list(title: string) {
        const cards = await this.cardRepository.list(title);
        return cards;
    }

    async saveCard(input: SaveCardInput): Promise<number> {
        const idCard = await this.cardRepository.save(new Card(input.idColumn, undefined, input.title, input.estimative));
        return idCard;
    }

    async deleteCard(idCard: number): Promise<void> {
        await this.cardRepository.delete(idCard);
    }

    async updateCard(input: UpdateInput) {
        const card = new Card(input.idColumn, input.idCard, input.title, input.estimative);
        await this.cardRepository.update(card);
    }
}

type SaveCardInput = {
    idColumn: number,
    title: string,
    estimative: number
}

type UpdateInput = {
    idCard: number,
    idColumn: number,
    title: string,
    estimative: number
}