<template>
  <div class="game">
    <div class="game__header">
      <div>Teplo</div>
      <div>🔥 🧊</div>
    </div>
    <div class="game__field">
      <GameField />
    </div>
    <div class="game__footer">
      <Indicator label="score" :value="store.gameState.score" />
      <div v-if="store.gameState.isGameOver" @click="store.resetGame()" class="game-button">- replay -</div>
      <Indicator label="steps" :value="store.gameState.steps" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Indicator from './components/Indicator.vue'
import GameField from './components/GameField.vue'
import { useGameStore } from './stores/index'
const store = useGameStore()

store.resetGame()
</script>

<style lang="scss" scoped>
.game {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  width: 100vw;
  height: 100vh;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 800;
  color: var(--color-content);
  background-color: var(--color-game-bg);
  padding: 3.2rem 3.2rem 2.4rem;
  box-sizing: border-box;

  @media screen and (min-width: 501px) {
    display: grid;
    grid-template-rows: 4rem 1fr auto;
    flex-direction: unset;
    justify-content: unset;
    height: auto;
    max-width: 46rem;
    border-radius: 1.6rem;
    border: 1px solid var(--color-content);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2rem 3rem;
  }

  &__field {
    aspect-ratio: 1 / 1;
    display: grid;
    place-items: center;
  }
 
  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 3.2rem;
  }
}

.game {
  &-restart {
    font-size: 4.2rem;
  }

  &-button {
    color: var(--color-fire);
    transition: color .3s ease;
    cursor: pointer;

    &:hover {
      color: var(--color-ice);
    }
    
    &:active {
      transform: scale(1.1);
    }
  }
}
</style>
