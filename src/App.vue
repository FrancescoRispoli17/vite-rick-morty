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
        created(){
            axios.get(this.store.apiURL).then((response) => this.store.results = response.data.results);
        }
    };
</script>

<template>
    <Header />
    <Main />
</template>

<style scoped land="scss">

</style>
