<script setup>
import { ref } from 'vue'

const props = defineProps({
	todos: Array,
})
</script>

<template>
  <p v-if="todos.length === 0">リストがまだありません</p>
  <ul v-else v-for="t in todos">
    <li>
      <label v-bind:class="t.isComplete ? 'delete' : ''">
        <input type="checkbox"
          @click="checkUpdate"
          v-model="t.isComplete"
        >{{ t.message }}
      </label>
    </li>
  </ul>
</template>

<style>
.delete {
	text-decoration: line-through;
}
</style>
