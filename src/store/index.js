import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arr: [[1,2,3], [4,5,6], [7,8,9]],
  },
  mutations: {
    oneDelta(state, delta){
      state.arr = state.arr.map(line => line.map(el=>el+=delta));
    },
    oneDiag(state){
      let z = state.arr.map(v=>v);
      let sum = 0;
      for (let i = 0; i < z.length; i++){
        for (let j = 0;j<z[i].length;j++){
          if (i == j){
            sum += z[i][j];
          }else {
            if (i + j == z.length -1){
              sum += z[i][j];
            }
          }
        }
      }
      z[0][0] = sum;  
      state.arr = z
    },
    swap(state, a){
      let z = state.arr.map(v => v)
      let a1 = a[0]
      let b1 = a[1]
      let firts = []
      let second = []
      for (let i = 0;i<z.length;i++){
        for (let j =0;j<z[i].length;j++){
          if (j == a1){
            firts.push(z[i][j])
          }else if (j == b1){
            second.push(z[i][j])
          }
        }
      }
      for (let i =0;i<z.length;i++){
        z[i][a1] = second[i]
      }
      for (let i =0;i<z.length;i++){
        z[i][b1] = firts[i]
      }
      console.log(z)
      state.arr = z
    },
    swapStr(state,a){
      let z = state.arr.map(v => v)
      let a1 = a[0]
      let b1 = a[1]
      let firts = []
      let second = []
      for (let i = 0;i<z.length;i++){
        for (let j =0;j<z[i].length;j++){
          if (i == a1){
            firts.push(z[i][j])
          }else if (i == b1){
            second.push(z[i][j])
          }
        }
      }
      for (let i =0;i<z.length;i++){
        z[a1][i] = second[i]
      }
      for (let i =0;i<z.length;i++){
        z[b1][i] = firts[i]
      }
      console.log(z)
      state.arr = z
    },
    matrixplusOne(state){
      let z = state.arr.map(v => v)
      let x = []
      for (let i = 0; i<=z.length;i++){
        x.push([])
        console.log(x);
        for (let j =0;j<=z.length;j++){
          x[i].push(0)
        }
      }
      for (let i = 0; i<z.length;i++){
        for (let j =0;j<z[i].length;j++){
          x[i][j] = z[i][j]
        }
      }
      state.arr = x
    },
    matrixminusOne(state){
      let z = state.arr.map(v => v)
      let x = []
      for (let i = 0; i<z.length-1;i++){
        x.push([])
        console.log(x);
        for (let j =0;j<z.length-1;j++){
          x[i].push(0)
        }
      }
      for (let i = 0; i<x.length;i++){
        for (let j =0;j<x[i].length;j++){
          x[i][j] = z[i][j]
        }
      }
      state.arr = x;
    },
    AveMaria(state){
      let z = state.arr.map(v => v)
      if (z.length%2 == 0){
        let x = z.length / 2
        for (let i =0;i<z.length;i++){
          for (let j = 0;j<z[i].length;j++){
            if ((i == x)||(i == x-1)){
              z[i][j] = 9
            }else if ((j == x) || (j == x-1)){
              z[i][j] = 9
            }
          }
        }
        console.log(z)
        state.arr = z;
      }else{
        let x = Math.floor(z.length/2)
        console.log(x)
        for (let i =0;i<z.length;i++){
          for (let j = 0;j<z[i].length;j++){
            if (i == x){
              z[i][j] = 9
            }else if (j == x){
              z[i][j] = 9
            }
          }
        }
        console.log(z)
        state.arr = z;
      }
      
    }
  },
  actions: {
    addOne(ctx){
      ctx.commit('oneDelta', 1)
    },
    addDiagonal(ctx){
      ctx.commit('oneDiag')
    },
    swap(ctx, a){
      ctx.commit('swap', a)
    },
    swapStr(ctx,a){
      ctx.commit('swapStr', a)
    },
    matrixplusOne(ctx){
      ctx.commit('matrixplusOne')
    },
    matrixminusOne(ctx){
      ctx.commit('matrixminusOne')
    },
    AveMaria(ctx){
      ctx.commit('AveMaria')
    }
  },
  getters:{
    getNumber: (state) => state.arr
  }
})