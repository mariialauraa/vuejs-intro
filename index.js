//uma instância de uma aplicação no VueJS
const app = Vue.createApp({    
    
    //variáveis q o Vue consegue manipular dinamicamente
    data() {
        return {
            login: 'jpaulo',
            name: 'João Paulo',
            company: 'Acme Inc.',
            bio: '...',
            avatar_url: 'https://unsplash.it/256',
            searchInput: '' //para começar vazio
        }
    },
    //método que vai chamar a API do GitHub
    methods: {
        //uma busca de forma assíncrona
        async fetchGithubUser() {
            const resposta = await fetch(`https://api.github.com/users/${this.searchInput}`)
            //desestrutura a 'resposta' e pega os valores dela:
            const { login, name, company, bio, avatar_url } = await resposta.json() //converte p/ json
            
            //seta os dados nas propriedades dinâmicas:
            this.login = login
            this.name = name
            this.company = company
            this.bio = bio
            this.avatar_url = avatar_url
        }
    }

})

//método responsável por colocar nossa aplicação na página
app.mount('#app') //'#app' é o 'id' da 'div'