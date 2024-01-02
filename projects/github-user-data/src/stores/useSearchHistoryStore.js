import { defineStore } from "pinia";

export const useSearchHistoryStore = defineStore('searchHistory', {
  //função q devolve um estado
  state: () => {
    return {
      users: [] //inicia como sendo um array vazio
    }
  }, 
  //útil para manipular o 'state'
  actions: {
    //método que vai jogar um nome de usuário para o histórico
    pushToHistory(username) {
      this.users.unshift(username)
    }
  }
})