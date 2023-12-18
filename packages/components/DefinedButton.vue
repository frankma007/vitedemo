<script setup>
// const iconName = defineProps(iconName)
// const svgClass = defineProps(svgClass)
defineProps({
  iconName: {
    type: String,
    default: '#icon-ArrowLeftBold'
  },
  name: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(
  ['handleClick']
)
const handleClick = () => {
  console.log(1)
  emit('handleClick')
}
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