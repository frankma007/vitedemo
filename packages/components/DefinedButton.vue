<script >
// const iconName = defineProps(iconName)
// const svgClass = defineProps(svgClass)
import DefinedIcon from './DefinedIcon.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  extends: DefinedIcon, //extends不能继承语法糖里面的内容 setup的自定义事件
  props: {
    name: {
      type: String,
      default: ''
    }
  },

})

/* defineProps({
  iconName: {
    type: String,
    default: '#icon-ArrowLeftBold'
  },
  name: {
    type: String,
    default: ''
  }
}) */
/* const emit = defineEmits(
  ['handleClick']
) */
/* const handleClick = () => {
  console.log(1)
  emit('handleClick')
} */
</script>
<template>

  <div class="btn-box"
       @click="handleClick">
    <button>
      <!--svgClass="brown"-->
      <DefinedIcon :iconName="iconName"></DefinedIcon>
      {{name}}
    </button>
  </div>
</template>
<style lang="scss" scoped>
// .brown {
//   color: brown;
// }
.btn-box {
  button {
    height: 32px;
    padding: 0 12px;
    color: brown;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>