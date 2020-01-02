<template>
    <div class="box">
        关于 1000phone {{ name }}

        <button @click="increament">add {{count}}</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "千锋教育!!!",
                count: 10
            }
        },
        methods: {
            increament() {
                this.count++;
            }
        }
    }
</script>

<style scoped>
    div {
        color: yellow
    }

    .box {
        background: green;
        width: 300px;
        height: 300px;
    }
</style>
