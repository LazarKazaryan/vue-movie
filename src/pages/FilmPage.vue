<template>
     <div class="about-film-container">
        <h1 class="about-film-container-title mt-2">{{ film.title }}</h1>
        <div class="about-film-container-line"></div>
        <img 
            class="about-film-container-img" 
            :src="film.img" 
            alt="film.title"
        >
        <label class="about-film-container-label">A little about the plot:</label>
        <p>{{ film.description }}</p>
        <label class="about-film-container-label">Rating: </label>
        <p>{{ film.rating }}</p>
        <label class="about-film-container-label">Cast:</label>
        <p>{{ film.actors.join(",") }}</p>
        <label class="about-film-container-label">Directors: </label>
        <p>{{ film.directors.join(",") }}</p>
        <div class="about-film-container-line"></div><br>
        <h3>Watched this movie?</h3>
        <label class="about-film-container-label">Leave a review: </label><br>
        <div class="btn-group">
            <button 
                class="btn btn-outline-light btn-reaction"
                v-for="(reaction, idx) in reactions"
                :key="idx"
            ><i class="far fa-star" v-for="star in reaction.stars" :key="star"></i></button>
        </div>
    </div>
</template>

<script>
import films from "../mocks/films"
import { mapGetters } from 'vuex'

export default {
    data(){
        return {
            film: null
        }
    },
    created(){
        const film = films.find(film => film.id == this.$route.params.id);
        if(film){
            this.film = film
        }
    },
    computed: {
        ...mapGetters({
            getReactions: 'reactions/getReactions'
        }),
        reactions(){
            return this.getReactions
        }
    }
}
</script>

<style>
    .about-film-container{
        position:absolute;
        background: radial-gradient(#080a0f, #0b0d14);
        color: #fff;
        width: 100%;
        min-height: 100%;
        padding:20px 15%;
    }
    .about-film-container-line{
        margin: 15px 0;
        width:100%;
        height:4px;
        background: linear-gradient(90deg, #d26a4d , transparent);
    }
    .about-film-container-img{
        width:100%;
        border-radius:10px;
        margin: 20px 0;
    }
    .about-film-container-label{
        margin-bottom:10px;
        font-size:25px;
        color:#f17348;
        font-weight:600;
    }
    .btn-reaction i{
        transition:0.15 ease;
    }
    .btn-reaction:hover i{
        color:#000;
    }
</style>