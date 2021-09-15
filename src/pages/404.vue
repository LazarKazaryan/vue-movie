<template>
    <div class="not-found">
        <h1 class="not-found-error-name">Error 404</h1>
        <h2 class="not-found-error-text">Page Not Found</h2><br>
        <router-link :to="{ name: 'main' }"><button class="btn btn-outline-warning">Got to Main page</button></router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .not-found{
        position:absolute;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: radial-gradient(#080a0f, #0b0d14);
        color: #fff;
        width: 100%;
        height: 100%;
    }
    .not-found-error-name{
        color:#ffc107;
        font-size:50px;
    }
    .not-found-error-text{
        font-size:40px;
    }
</style>