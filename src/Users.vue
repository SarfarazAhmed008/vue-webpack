<template>
    <div>
        <h1>Users Overview</h1>
        <p>The team id number is {{ $route.params.teamId }}</p>
        <button type="button" name="button" @click="goHome">Go Home</button>
    </div>
</template>

<script>
export default {
    methods : {
        goHome(){
            this.$router.push('/');
        }
    },
    created(){
        // alert(this.$route.params.teamId);
    },
    watch : {
        '$route' (to, from) {
            // alert(to.params.teamId);
        }
    }
}
</script>

<style lang="css">
</style>
