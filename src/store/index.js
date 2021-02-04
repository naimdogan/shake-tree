import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//random bir sayı döner ve kaç adet döneceğini belirler.
//arr: Array, n: Number değer alır.
const chooseRandom = (arr, n) => {
  return arr.sort(() => Math.random() - Math.random()).slice(0, n);
};

export default new Vuex.Store({
  state: {
    isShaked: false,
    apple: [
     { id: 0, done: false },
     { id: 1, done: false },
     { id: 2, done: false },
     { id: 3, done: false },
     { id: 4, done: false },
     { id: 5, done: false },
     { id: 6, done: false },
     { id: 7, done: false },
     { id: 8, done: false },
     { id: 9, done: false },
     { id: 10, done: false },
     { id: 11, done: false }
    ],
    basket: []
  },
  mutations: {
    isShaked (state) {
       //ağacın sallanacağı classı ekler.
      state.isShaked = true;
      setTimeout(() => {
        state.isShaked = false;
      }, 3000);
    },
    SET_BASKET (state, item) {
      //ağaçtan düşecek elmaları filtreler.
      item.filter(x => {
        state.apple.filter(y => {
          if(x.id === y.id) {
            x.done = true;
            //düşen elmaları sepete'e ekler.
            setTimeout(() => {
              state.apple.splice(x, 1);
              state.basket.push(x)
            }, 2000);
          }
        })
       });
     }
  },
  actions: {
    randomApple({state, commit}){
      // aralıklarla düşecek elma sayılarını ve düşme zamanlarını belirliyoruz.
      let item = chooseRandom(state.apple, 2)
      commit('SET_BASKET', item)
      setTimeout(() => {
        item = chooseRandom(state.apple, 3)
        commit('SET_BASKET', item)
      }, 2000);
    }
  },
  modules: {
  }
})
