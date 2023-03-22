/* ToDoアプリ https://qiita.com/TakahiRoyte/items/a9aac2f069b99f3378c7 */
<script setup>
import { ref, reactive } from 'vue'
const newTodo = ref('')
let todos = ref([
  {
    message:'初期表示でデータが何もない時、リストの位置に「ToDoがまだありません！」と表示する',
    isComplete: false,
  },
  {
    message:'フォームに文字を入力し、追加ボタンを押すと文字列を元にToDoリストに追加される',
    isComplete: true,
  },
  {
    message:'ToDoに追加したタイミングでフォームの文字列はクリアされる',
    isComplete: true,
  },
  {
    message:'フォームに文字が未入力時に追加ボタンを押しても、アラートが表示されリストに追加されない',
    isComplete: false,
  },
  {
    message:'ToDo毎のチェックボックスのオンオフで文字列に完了済みのラインの切り替えができる',
    isComplete: false,
  },
  {
    message:'完了済みを削除するボタンを押すとチェックボックスがオンになっているToDoが削除される',
    isComplete: true,
  },
])

const addTodo = function(){
  todos.push({
    message: newTodo.value,
    isComplete: false,
  })
  newTodo.value = ''
}
const checkUpdate = function(e){
  console.log(e)
  // checked情報は↓のようにして取得できる
  console.log(e.target.checked)
  // どうやって自身の状態をアップデートしたらいい？
  // →バインディングを使用すればよい→バインディングを行えばこのメソッドも不要だし、オブジェクトのkey管理も不要
  //    → checkbox にv-model を指定した。むちゃくちゃ楽だ！
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
          v-model="t.isComplete"
        >{{ t.message }}
      </label>
    </li>
  </ul>
</template>