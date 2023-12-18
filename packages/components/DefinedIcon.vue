<script >
// const iconName = defineProps(iconName)
// const svgClass = defineProps(svgClass)
/* defineProps({
  iconName: {
    type: String,
    default: '#icon-ArrowLeftBold'
  },
  svgClass: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(
  ['handleClick']
) */
import { defineComponent } from 'vue'
export default defineComponent({

  emits: [], // 不声明事件
  props: {
    iconName: {
      type: String,
      default: '#icon-ArrowLeftBold'
    },
    svgClass: {
      type: String,
      default: ''
    }
  },
  setup () {
    /* const handleClick = () => {
      console.log(555)
      emit('handleClick')
    } */

  }

})

</script>
<template>

  <svg :class="svgClass"
       v-on:click="$emit('click', $event)"
       class="icon"
       aria-hidden="true">
    <use :xlink:href="'#'+iconName"></use>
  </svg>
</template>
<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>