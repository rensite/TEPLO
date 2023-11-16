<template>
  <div class="game-indicator">
    <div class="game-indicator-label">{{ label }}</div>
    <div class="game-indicator-value">{{ value }}</div>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    label: String,
    value: Number
  })
</script>

<style lang="scss" scoped>
.game-indicator {
  text-align: center;
  
  &-label {
    font-size: 1.6rem;
  }
  
  &-value {
    font-size: inherit;
  }
}
</style>