<template>
    <div>
        <Toolbar />

        <router-view/>

        <br><br>
        
        <AppFooter />
    </div>
</template>

<script>
    import AppFooter from'./AppFooter'
    import Login from'./login/Login'
    import Toolbar from'./Toolbar'



    export default {
        name: "Home",

        components: {
            Toolbar, 
            AppFooter,
            Login
        }
    }
</script>

<style>

</style>
