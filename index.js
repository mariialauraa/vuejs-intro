//uma instância de uma aplicação no VueJS
const app = Vue.createApp({    
    
    //retorna dados JS
    data() {
        return {
            name: 'OneBitCode',
            count: 0
        }
    },
    methods: {
        increaseCount() {
            //referência o 'count' do data
            this.count++ 
        }
    }

})

//método responsável por colocar nossa aplicação na página
app.mount('#app') //'#app' é o 'id' da 'div'