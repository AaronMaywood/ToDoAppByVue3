<script setup>
import TodoAdd from '@/components/TodoAdd.vue'
import TodoList from '@/components/TodoList.vue'
import { ref, computed } from 'vue'
import { mapStores } from 'pinia'
import { useTodoStore } from '@/stores/todos'

const store = useTodoStore()

const addTodoStore = newTodo => {
  if(newTodo.value === ''){
	alert('内容を入力してください')
  }else{
	store.addTodo({
	  message: newTodo.value,
	  isComplete: false,
	})
	newTodo.value = ''
  }
}
</script>

<template>
	<p>完了済みの件数 {{ store.deletedNumber }}</p>
	<TodoAdd @delete-done="store.deleteCompleted" @add-todo="addTodoStore" />
	<TodoList :todos="store.todos" />
</template>
