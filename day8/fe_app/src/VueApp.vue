<template>
    <div>
        vue app
        {{ count }}
        <button @click="addCount">add</button>
    </div>
</template>
<script>

export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        addCount() {
            this.count++;
            sessionStorage.setItem('hello', '你好' + this.count);
        }
    }
}
</script>