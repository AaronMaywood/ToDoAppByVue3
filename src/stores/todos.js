// https://qiita.com/TakahiRoyte/items/ee0cb0212e9d88a88292
// https://pinia.vuejs.org/introduction.html
import { ref,computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', () => {
	const todos = ref([
	  {
		message: 'ToDo in Pinia Store!',
		isComplete: true,
	  },
	])

	const deletedNumber = computed(() => {
		return todos.value.filter(t=>t.isComplete).length
	})

	const deleteCompleted = () => {
		todos.value = todos.value.filter(t=>!t.isComplete)
	}

	const addTodo = newTodo => {
		todos.value.push(newTodo)
	}

	return { todos,deleteCompleted,deletedNumber,addTodo }
})
