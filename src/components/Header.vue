<script>
    export default{
        name:'Header',
    };
</script>

<template>
    <div class="contaier">
        <div class="row">
            <div class="col">
                <h1>Rick and Morty App</h1>
            </div>
            <div class="col">
                <input type="text" placeholder="Search character">
                <select name="status">
                    <option value="" disabled selected>Select status</option>
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