<script setup>
import TodoAdd from '@/components/TodoAdd.vue'
import TodoList from '@/components/TodoList.vue'
import { ref, computed } from 'vue'
import { mapStores } from 'pinia'
import { useTodoStore } from '@/stores/todos'

const store = useTodoStore()
</script>

<template>
  <TodoAdd @delete-done="store.deleteCompleted" @add-todo="store.addTodo" />
  <TodoList :todos="store.todos" />
</template>
