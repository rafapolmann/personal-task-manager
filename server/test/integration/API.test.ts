import axios from "axios";

test("Deve retornar os quadros por meio da API", async function () {
    const response = await axios({
        url: "http://localhost:3000/boards",
        method: "get"
    });
    const boards = response.data;
    expect(boards).toHaveLength(1);
    const [board] = boards;
    expect(board.name).toBe('Projeto 1');
});