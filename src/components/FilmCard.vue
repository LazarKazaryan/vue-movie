<template>
    <div class="film-container-item-content">
        <div class="film-container-item-rating">{{ film.rating }}</div>
        <img :src="film.imgUrl" :alt="film.title" class="film-container-item-img">
        <div class="film-container-item-title">
            <h3 class="film-container-item-title-text">
                {{ film.title }}
            </h3>
        </div>
        <router-link :to="{ name: `filmPage`, params:{ id: film.id } }">
            <div class="more-about">
                <p class="more-about-text">More about movie</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props:{
        film:{
            Object
        }
    }
}
</script>

<style>
    .film-container-item-content{
        color:#fff;
    }
    .film-container-item-title{
        width:100%;
        height:100px;
        background: linear-gradient(90deg,rgb(0, 0, 0), rgba(0, 0, 0, 0.7), transparent);
        bottom:2px;
        border-bottom-left-radius:7px;
        left:2px;
        z-index: 2;
        position:absolute;
    }
    .film-container-item-title-text{
        letter-spacing: 2px;
        margin-left:2%;
        margin-top:20px;
    }
    .film-container-item-rating{
        padding:10px 35px;
        background: rgba(252, 88, 88, 0.911);
        border-bottom-left-radius:12px;
        top:0;
        right:0;
        position:absolute;
    }
    .film-container-item-img{
        width:100%;
    }
    .more-about{
        width:100%;
        height:100%;
        position:absolute;
        z-index: 2;
        background-color: rgba(27, 27, 27, 0.589);
        color:#fff;
        display:flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        top:0;
        opacity: 0;
        z-index:1;
        transition:0.2s ease;
    }
    .more-about-text{
        transition: 0.2s ease;
        user-select:none;
    }
    .more-about-text:hover{
        letter-spacing: 4px;
    }
</style>