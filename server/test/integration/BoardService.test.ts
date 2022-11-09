import BoardService from "../../src/service/BoardService";

test("Deve listar os quadros", async function () {
    const boardService = new BoardService();
    const boards = await boardService.getBoards();
    expect(boards).toHaveLength(1);
    const [board] = boards;
    expect(board.name).toBe("Projeto 1");
});