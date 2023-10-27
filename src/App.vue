<template>
    <HeaderComponent></HeaderComponent>
    <div id="body">
        <NavigationComponent></NavigationComponent>
        <router-view></router-view>
    </div>
</template>

<script>
import { store } from './store';

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<style>

#body {
    display: grid;
    grid-template-columns: 396px auto ;
    
}

</style>