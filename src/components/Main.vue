<script>
import Character from './Character.vue';
import { store } from '../store';

    export default{
        name:'Main',
        components:{
            Character,
        },
        data(){
            return{
                store,
            }
        },
    };
</script>

<template>
    <div class="container">
        <div class="row">
            
            <Character v-for="character in store.results"
                :characters="character" />
            
        </div>
    </div>
</template>

<style scoped lang="scss">

.col{
    width: calc(100% /4 - 30px);
    text-align: center;
    margin-bottom: 20px;
}
</style>