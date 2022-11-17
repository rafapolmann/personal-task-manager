<script setup lang="ts">
import { inject, onMounted, reactive } from "vue";
import Board from "../entities/Board";
import BoardService from "../services/BoardService";
import BoardComponent from "../components/BoardComponent.vue";
import DomainEvent from "../events/DomainEvent";

const data: { board: Board | undefined } = reactive({ board: undefined });

onMounted(async () => {
  const boarService = inject("boardService") as BoardService;
  const board = await boarService.getBoard(1);

  board.on("addColumn", async function (event: DomainEvent) {
    console.log(event.data);
    await boarService.saveColumn(event.data);
  });
  data.board = board;
})
</script>

<template>
  <BoardComponent :board="data.board"></BoardComponent>
</template>

<style scoped>
</style>
