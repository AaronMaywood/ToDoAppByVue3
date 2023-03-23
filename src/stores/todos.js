// https://qiita.com/TakahiRoyte/items/ee0cb0212e9d88a88292
// https://pinia.vuejs.org/introduction.html
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', () => {
	const todos = ref([
	  {
		message: 'ToDo in Pinia Store!',
		isComplete: true,
	  },
	])

	const deleteCompleted = () => {
		todos.value = todos.value.filter(t=>!t.isComplete)
	}

	const addTodo = obj => {
	  if(obj.value === ''){
		alert('内容を入力してください')
	  }else{
		todos.value.push({
		  message: obj.value,
		  isComplete: false,
		})
		obj.value = ''
	  }
	}

	return { todos,deleteCompleted,addTodo }
})
