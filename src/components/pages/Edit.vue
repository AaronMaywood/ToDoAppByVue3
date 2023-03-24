<script setup>
import { useRoute } from 'vue-router'
import { useTodoStore } from '@/stores/todos'

const route = useRoute()
const id = route.params.id

const store = useTodoStore()
</script>

<template>
	<p>編集モード</p>
	<input type="text" v-model="store.todos[id].message" />
</template>
