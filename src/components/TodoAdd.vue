<script setup>
const emit = defineEmits(['delete-done','add-todo'])

const addTodo = (e) => {
	console.log(e)
	emit('add-todo')
}

</script>

<template>
  <button type="button" @click="$emit('delete-done')">完了済みを削除</button>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="newTodo">
    <button>追加</button>
  </form>
</template>
