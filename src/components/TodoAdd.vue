<script setup>
import { ref } from 'vue'
import MyButton from './basics/MyButton.vue'

const newTodo = ref('')

const emit = defineEmits(['delete-done','add-todo'])

const addTodo = (e) => {
	emit('add-todo', newTodo)
}
</script>

<template>
  <MyButton @click="$emit('delete-done')">
	完了済みを削除
  </MyButton>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="newTodo">
	<MyButton><img src="@/assets/icon-plus.svg" width="10" height="10" alt=""> 追加</MyButton>
  </form>
</template>
