<template>
    <div>
        <input type="text" :value="msg" @input="changeMessage">  <!-- v-bind:value and v-on:input  -->
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    props : ['msg'],
    data(){
        return {
            message : ""
        };
    },
    methods : {
        changeMessage(event){
            this.message = event.target.value;
            this.$emit('updateMessage', this.message);
        }
    }

}
</script>

<style>
</style>
