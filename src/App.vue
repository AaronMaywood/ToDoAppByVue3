/* ToDoアプリ https://qiita.com/TakahiRoyte/items/a9aac2f069b99f3378c7 */
<script setup>
import { ref, reactive } from 'vue'
const newTodo = ref('')
let todos = ref([
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
  /* todos = todos.filter() のように上書きしようと思ったが、
  todos はconst なので上書きできない。
  また、let todos にしたとしても、上書きすることで reactive() オブジェクト
  でなくなってしまうかもしれない？
  
  ↓let todos を上書きしてみたが、やはり reactive() オブジェクトではなくなってしまっている
    See:
    https://i.gyazo.com/5a5ed99e0b551fbcde197b737ad6723c.png
  ↓そこで、reactive() の代わりにref() を使用する
  ref で作成した場合には、ref.value プロパティを利用できる
  */
  todos.value = todos.value.filter(t=>!t.isComplete)
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