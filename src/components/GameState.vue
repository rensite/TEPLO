<template>
  <div class="game-state">
    <Transition name="fade">
      <span v-if="isFire"></span>
      <span v-else>🧊</span>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    isFire: {
      type: Boolean,
      default: true
    }
  })
</script>

<style lang="scss" scoped>
.game-state {
  font-size: inherit;
}
</style>