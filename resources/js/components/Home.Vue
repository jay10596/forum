<template>
    <div>
        <toolbar/>
        
        <app-footer/>

        <router-view/>
    </div>
</template>

<script>
    import Toolbar from'./Toolbar'
    import AppFooter from'./AppFooter'
    import Login from'./login/Login'


    export default {
        components: {Toolbar, AppFooter, Login}
    }
</script>

<style>

</style>
