<template>
  <div>
    我是TestSlot组件
    <slot name="content"></slot>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'test-slot'
  }
</script>