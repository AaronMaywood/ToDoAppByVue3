<script setup>
import { ref, reactive, computed } from 'vue'
const title = reactive('My New Vue Title hello')
const message = reactive('Welcome to vue')
const isRed = reactive(true)
const firstName = reactive('John')
const lastName = reactive('Doe')
const fullName = computed(()=>{
  return `${firstName} ${lastName}`
})

const input = ref({
  firstName: '',
  lastName: '',
  isMember: false,
})
const users = ref([
  {
    firstName: "Jane",
    lastName: "Done",
    isMember: true,
  },
])

const addUser = function(){
  console.log(input.value)
  if(input.value.firstName && input.value.lastName){
    users.value.push(input.value)
    console.log(users.value)
    input.value = {
      firstName: '',
      lastName: '',
      isMember: false,
    }
  }
}

</script>
<template>
  <h1 :class="{red:isRed}" :title="title">{{ message }}{{ fullName }}</h1>
  <form @submit.prevent="addUser">
    <input type="text" v-model="input.firstName">
    <input type="text" v-model="input.lastName">
    <input type="checkbox" v-model="input.isMember">
    <button>登録</button>
  </form>
  <ul>
    <li v-for="u in users">
      {{ u.firstName }} {{ u.lastName }}
      <p v-if="u.isMember">メンバーです。</p>
      <p v-else>メンバーではありません。</p>
    </li>
  </ul>
</template>

<style>
.red {
  color:red;
}
</style>