/* ToDoアプリ https://qiita.com/TakahiRoyte/items/a9aac2f069b99f3378c7 */
<script setup>
import { ref, reactive } from 'vue'
const newTodo = ref('')
const todos = reactive([
  {
    message:'ToDoアプリのプロトタイプを作る',
    isComplete: true,
  },
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
const checkUpdate = function(e){
  console.log(e.target)
  // checked情報は↓のようにして取得できる
  console.log(e.target.checked)
}

const deleteCompleted = () => {
  console.log('delete')
  console.log( todos.filter(t=>t.isComplete===false))
  /* todos = todos.filter() のように上書きしようと思ったが、
  todos はconst なので上書きできない。
  また、let todos にしたとしても、上書きすることで reactive() オブジェクト
  でなくなってしまうかもしれない？
  */
}
</script>

<template>
  <button type="button" @click="deleteCompleted">完了済みを削除</button>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="newTodo">
    <button>追加</button>
  </form>
  <ul v-for="t in todos">
    <li>
      <label>
        <input type="checkbox"
          @click="checkUpdate"
          v-bind:checked="t.isComplete"
        >{{ t.message }}
      </label>
    </li>
  </ul>
</template>