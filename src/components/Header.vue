<script>
import { store } from '../store';
    export default{
        name:'Header',
        data(){
            return{
                store,
            }
        },
        methods:{
            searchStatus(){
                console.log('aaaaaa')
            }
        }
    };
</script>

<template>
    <div class="contaier">
        <div class="row">
            <div class="col">
                <h1>Rick and Morty App</h1>
            </div>
            <div class="col">
                <input type="text" placeholder="Search character" @input="$emit('ricerca')" v-model="store.apiInfo.name">
                <select name="status" @change="$emit('ricerca')" v-model="store.apiInfo.status">
                    <option value="" selected>Select status</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknow">Unknow</option>
                </select>
                <button class="Search">Search</button>
                <button class="Reset">Reset</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.row{
    display: block;
}
.col{
    text-align: center;
    margin: 30px 0;
}
</style>