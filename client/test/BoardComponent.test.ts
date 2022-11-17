import { mount } from "@vue/test-utils";
import Board from "../src/entities/Board";
import BoardComponentVue from "../src/components/BoardComponent.vue";


test("Deve testar o board component", async function () {
    const board = new Board("Projeto 1");
    board.addColumn("Todo", true);
    board.addColumn("Doing", true);
    board.addColumn("Done", false);
    board.addCard("Todo", "Atividade 1", 3);
    board.addCard("Todo", "Atividade 2", 2);
    board.addCard("Todo", "Atividade 3", 1);
    board.addCard("Todo", "Atividade 4", 2);

    const wrapper = mount(BoardComponentVue, {
        props: {
            board
        }
    });

    expect(wrapper.get("#estimative").text()).toBe("8");
});  