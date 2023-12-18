<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

const count = ref(0)

//把所有关于icon的变量和函数封装到一个函数中，usehooks 像在用有关icon的钩子
function useIcon (count) {

  const handleClick = () => {
    count.value++
  }
  return {

    handleClick
  }
}
const {
  handleClick } = useIcon(count)
const btnClick = () => {
  console.log(2)

  count.value++
}
</script>

<template>
  <!-- svgClass="" -->
  {{ count }}
  <DefinedIcon iconName="icon-shengdanqiu"
               @handleClick="handleClick"></DefinedIcon>
  <DefinedIcon iconName="icon-yuyan-copy"
               svgClass="btnicn"
               @handleClick="handleClick"></DefinedIcon>
  <!-- <HelloWorld msg="从现在开始，每天30分钟视频" /> -->
  <DefinedButton iconName="icon-a-004_kefu"
                 @handleClick="btnClick"
                 name="提交">

  </DefinedButton>
</template>

<style scoped>
.btnicn {
  cursor: pointer;
  margin: 0 3px;
}
</style>
