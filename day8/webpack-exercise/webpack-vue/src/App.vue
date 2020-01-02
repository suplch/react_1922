<template>
    <div class="bgcolor">
        {{ message }}
        <hr/>
        <About/>
    </div>
</template>

<script>
    import About from './components/About';
    export default {
        data() {
            return {
                message: 'Hello Vueaa'
            }
        },
        components: {
            About
        }
    }
</script>

<style scoped>
    .bgcolor {
        background: lightcoral;
        color: white;
        padding: 10px;
    }
</style>
