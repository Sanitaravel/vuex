<template>
  <div id="app">
    <div v-for="(i, arrIndex) in $store.getters.getNumber" :key="arrIndex">
      <div v-for="(j, index) in i" class="array-line" :key="index">
        {{j}}
      </div>
    </div>
    <div>
      <button @click="addOne">Добавить один ко всем</button>
    </div>
    <div>
    <button @click="addDiagonal">Сложить главную и побочную диагонали</button>
    </div>
    <div>   
      <button @click="swap">Поменять столбцы А и Б местами</button>
      <input v-model="firstCol" type="number" value="А">
      <input v-model="secCol" type="number" value="Б">
    </div>
    <div>   
      <button @click="swapStr">Поменять строки А и Б местами</button>
      <input v-model="firstStr" type="number" value="А">
      <input v-model="secStr" type="number" value="Б">
    </div>
    <div>
      <button @click="matrixplusOne">Увеличить размер матрицы на один</button>
      <button @click="matrixminusOne">Уменьшить размер матрицы на один</button>
    </div>
    <div>
      <button @click="AveMaria">Заполнить матрицу крестом цифрами 9</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      firstCol: 0,
      secCol: 0,
      firstStr:0,
      secStr:0
    }
  },
  methods:{
    addOne(){
      this.$store.dispatch('addOne');
    },
    addDiagonal(){
      this.$store.dispatch('addDiagonal')
    },
    swap(){
      this.$store.dispatch('swap', [this.firstCol, this.secCol])
    },
    swapStr(){
      this.$store.dispatch('swapStr', [this.firstStr, this.secStr])
    },
    matrixplusOne(){
      this.$store.dispatch('matrixplusOne')
    },
    matrixminusOne(){
      this.$store.dispatch('matrixminusOne')
    },
    AveMaria(){
      this.$store.dispatch('AveMaria')
    }
  }
}
</script>

<style>
.array-line{
  display : inline;
}
</style>