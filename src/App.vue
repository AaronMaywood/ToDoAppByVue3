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
  alert('hello')
}

</script>
<template>
  <h1 :class="{red:isRed}" :title="title">{{ message }}{{ fullName }}</h1>
    <input type="text" v-model="input.firstName">
    <input type="text" v-model="input.lastName">
    <input type="checkbox" v-model="input.isMember">
    <button @click="addUser">登録</button>
</template>

<style>
.red {
  color:red;
}
</style>