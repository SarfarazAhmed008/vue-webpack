<template>
    <div>
        <input type="text" v-model="message">
        <p>{{ message }}</p>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    props : ['msg'],
    data(){
        return {
            message : ""
        }
    }
}
</script>

<style>
</style>
