<script>

    export default{
        name:'Character',
        props:{
            characters:String,
        },
        data(){
            return{
                
            }
        },
       
    };
</script>

<template>
    <div class="col">
        <figure>
            <img :src="characters.image" :alt="characters.name">
        </figure>
        <p>{{characters.name}}</p>
        <span>{{characters.status}}</span>
        <span>{{characters.species}}</span>
    </div>
</template>

<style scoped lang="scss">
     figure{
        overflow: hidden;
        width: 360px;
        height: 360px;
        border-radius: 50%;
        margin: 20px auto;
        img{
            object-fit: cover;
            width: 100%;
        }
    }
    p{
            font-size: 2rem;
            margin-bottom: 2rem;
    }
    span{
        display: block;
        font-size: 1.2rem;
    }
</style>