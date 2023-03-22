/* ToDoアプリ https://qiita.com/TakahiRoyte/items/a9aac2f069b99f3378c7 */
<script setup>
// ↓のコンポーネントが表示されない！？
//    →原因判明、次の２つに気をつけること
// 1.  import {Home} from '@/components/pages/Home.vue' と書いてしまっていた
// 2. Home.vue の中でscriptにエラーがあった(`npm run dev`ではエラーが表示されなかったので気づけなかった→ESLintがあれば気づけたかな
import Home from '@/components/pages/Home.vue'
import Edit from '@/components/pages/Edit.vue'
</script>

<template>
	<Home />
	<Edit />
</template>
