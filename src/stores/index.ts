import { defineStore } from "pinia";
import { computed, reactive, ref } from 'vue'
import { REWARD, MATRIX_SIZE } from "@/config";

export const useGameStore = defineStore("game", () => {
  const matrix = ref([] as string[][])

  const gameState = reactive({
    steps: 0,
    score: 0,
    isGameOver: false,
    position: [0,0]
  })

  const incStep = () => {
    gameState.steps++
  }

  const revealCellValue = (x: number, y: number, distance: number) => {
    let value = "🥳"

    if (distance > 1) {
      value = "🧊"
    } else if (distance === 1) {
      value = "🔥"
    } else {
      gameState.isGameOver = true
      calcScore()
    }

    incStep()
    matrix.value[x][y] = value
  }

  const resetGame = () => {
    const rows = MATRIX_SIZE
    const cols = MATRIX_SIZE
    generateMatrix(rows, cols)
    gameState.steps = 0
    gameState.isGameOver = false
  }

  const calcScore = () => {
    const totalElemens = matrix.value.length * matrix.value[0].length
    const ratio = 1 - gameState.steps / totalElemens
    gameState.score += Math.ceil(ratio * REWARD)
  }

  const generateMatrix = (rows: number, columns: number) => {
    const x = Math.floor(Math.random() * rows)
    const y = Math.floor(Math.random() * columns)
    gameState.position = [x,y]

    matrix.value = new Array(rows).fill(0).map(() => new Array(columns).fill(''))
  }

  return { gameState, matrix, resetGame, revealCellValue }
})