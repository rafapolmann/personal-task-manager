import { mount } from "@vue/test-utils";
import Board from "../src/entities/Board";
import BoardService, { SaveColumnInput } from "../src/services/BoardService";
import BoardViewVue from "../src/views/BoardView.vue";

function sleep(ms: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, ms);
    });
}

test.skip("Deve testar o board view", async function () {
    const boardService: BoardService = {
        async getBoard(idBoard: number) {
            const board = new Board(1, "Projeto 1");
            board.addColumn("Todo", true);
            board.addColumn("Doing", true);
            board.addColumn("Done", false);
            board.addCard("Todo", "Atividade 1", 3);
            board.addCard("Todo", "Atividade 2", 2);
            board.addCard("Todo", "Atividade 3", 1);
            return board;
        },
        async saveColumn(column: SaveColumnInput): Promise<number> {
            return 1;
        }
    };

    const wrapper = mount(BoardViewVue, {
        global: {
            provide: {
                boardService
            }
        }
    });

    await sleep(10);
    expect(wrapper.get("#estimative").text()).toBe("6");
});  