<script>
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import { store } from './store'
    export default{
        name:'MyApp',
        components:{
            Header,
            Main,
        },
        data(){
            return{
                store,
            }
        },
        methods:{
            searchCharacter(){
                axios.get(this.store.apiInfo.url,{
                    params:{
                        status:this.store.apiInfo.status,
                        name:this.store.apiInfo.name
                    }
                })
                .then((response) => this.store.results = response.data.results);
            }
        },
        created(){
            this.searchCharacter();
            
        },
    };
</script>

<template>
    <Header @ricerca="searchCharacter" />
    <Main />
</template>

<style scoped land="scss">

</style>
