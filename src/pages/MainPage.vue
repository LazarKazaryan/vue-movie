<template>
    <div class="splash-screen">
        <h1 class="splash-screen-title">Online Cinema</h1>
        <button class="btn btn-outline-light">Go to Movies</button>
    </div>

</template>

<script>

// import useVuelidate from '@vuelidate/core'
// // eslint-disable-next-line no-unused-vars
// import { required, email, minLength, maxLength, sameAs } from '@vuelidate/validators'


export default {
    data(){
        return {
        }
    }
}
</script>

<style>
    .splash-screen{
        position:absolute;
        display:flex;
        flex-direction: column;
        gap:8px;
        align-items:center;
        justify-content: center;
        background: radial-gradient(#080a0f, #0b0d14);
        color: #fff;
        width: 100%;
        height: 100%;
    }
    .splash-screen h1{
        font-size:55px;
        font-weight: 200;
    }
    .splash-screen button{
        font-size:20px;
    }
</style>
