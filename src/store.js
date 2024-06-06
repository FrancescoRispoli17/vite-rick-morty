import { reactive } from 'vue';

export const store=reactive({
    results:[],

    apiInfo:{
        url:'https://rickandmortyapi.com/api/character/',
        endpoints:{
            name:'',
            status:''
        }
    }
})