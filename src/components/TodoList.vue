<script setup>
import { ref } from 'vue'

// Composition API ではこのように router を初期化する
// https://router.vuejs.org/guide/advanced/composition-api.html#accessing-the-router-and-current-route-inside-setup より
import { useRouter } from 'vue-router'
const router = useRouter()

import MyButton from '@/components/basics/MyButton.vue'

const props = defineProps({
	todos: Array,
})

const openEditMode = (todo) => {
	router.push('/edit') // ↑で初期化したrouter を使用している
}
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
	  <MyButton @click="openEditMode(t)">編集</MyButton>
    </li>
  </ul>
</template>

<style>
.delete {
	text-decoration: line-through;
}
</style>
