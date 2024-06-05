import { reactive } from 'vue';

export const store=reactive({
    results:[],
    apiURL:'https://rickandmortyapi.com/api/character',
})