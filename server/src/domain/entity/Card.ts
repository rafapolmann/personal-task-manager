export default class Card {

    constructor(readonly title: string, readonly estimative: number) {
        if (title === "") throw new Error("Title is required");
        if (estimative < 0) throw new Error("Estimative must be positive");
    }
}