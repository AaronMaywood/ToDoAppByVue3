/* ToDoアプリ https://qiita.com/TakahiRoyte/items/a9aac2f069b99f3378c7 */
<script setup>
import { ref, reactive } from 'vue'
const newTodo = ref('')
const todos = reactive([
  {
    message:'VueでToDoアプリを作る',
    isComplete: false,
  }
])

const addTodo = function(){
  todos.push({
    message: newTodo.value,
    isComplete: false,
  })
  newTodo.value = ''
  console.log(todos)
}
</script>

<template>
  <button>完了済みを削除</button>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="newTodo">
    <button>追加</button>
  </form>
  <ul>
    <li><input type="checkbox">ToDoアプリのプロトタイプを作成する</li>
  </ul>
</template>