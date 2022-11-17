<script setup lang="ts">
import CardComponent from './CardComponent.vue';

defineProps(["board", "column"]);
</script>

<template>
    <div class="column">
        <h3>{{ column.name }} <spam class="estimative">{{ column.getEstimative() }}</spam>
        </h3>
        <div v-for="card in column.cards">
            <CardComponent :board="board" :column="column" :card="card"></CardComponent>
        </div>
    </div>
</template>

<style scoped>
.column {
    width: 200px;
    text-align: center;
    background-color: #CCC;
    margin-right: 5px;
    padding: 10px;
    border: 1px solid #000;
}
</style>