<template>
  <table class="field">
    <tr v-for="row, x in store.matrix">
      <td
        v-for="col, y in row"
        @click="cellClick(x, y)"
      >
        <span>{{ col }}</span>
      </td>
    </tr>
  </table>
</template>

<script lang="ts" setup>
import { useGameStore } from '../stores/index'
const store = useGameStore()

const cellClick = (x:number, y:number) => {
  console.log(x,y)
  if (!store.matrix[x][y].length) {
    const distance = distanceInMatrix(x,y)
    store.revealCellValue(x, y, distance)
  }
}

const distanceInMatrix = (x: number, y: number) => {
  const itemX = store.gameState.position[0]
  const itemY = store.gameState.position[1]
  return Math.max(Math.abs(itemX - x), Math.abs(itemY - y))
}
</script>

<style lang="scss" scoped>
table.field {
  width: 100%;
  height: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-bottom: 1px solid var(--color-content);
  border-right: 1px solid var(--color-content);
  
  td {
    border-top: 1px solid var(--color-content);
    border-left: 1px solid var(--color-content);
    position: relative;
    transition: background-color .3s ease;

    &:hover {
      background-color: var(--color-cell-hover);
      cursor: pointer;
    }
    
    span {
      position: absolute;
      font-size: 2rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      aspect-ratio: 1 / 1;
      pointer-events: none;
    }
  }
}

$radius: 1rem;

table.field {
  border-radius: $radius;

  tr:first-of-type {
    td:first-of-type {
      border-top-left-radius: $radius;
    }

    td:last-of-type {
      border-top-right-radius: $radius;
    }
  }

  tr:last-of-type {
    td:first-of-type {
      border-bottom-left-radius: $radius;
    }
  }
}
</style>