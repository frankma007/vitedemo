<script setup>
// const iconName = defineProps(iconName)
// const svgClass = defineProps(svgClass)
defineProps({
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
)
const handleClick = () => {
  emit('handleClick')
}
</script>
<template>

  <svg :class="svgClass"
       @click="handleClick"
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