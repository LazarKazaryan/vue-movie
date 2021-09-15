<template>
    <div class="all-films">
        <div class="container film-container mt-4">
            <h1>Choose a movie</h1>
            <div class="film-container-item" v-for="(film, idx) in Films" :key="idx">
                <film-card :film="{
                    rating:film.rating,
                    title:film.title,
                    imgUrl:film.imgUrl,
                    id:idx+1,
                }" />
            </div>
        </div>
    </div>
</template>

<script>
import FilmCard from "../components/FilmCard"

export default {
    components:{FilmCard},
    data(){
        return {
            Films:[
                {
                    title: "The Gantleman",
                    imgUrl: "https://www.michaelandrews.com/mabcms/wp-content/uploads/2020/11/The-Gentleman-Movie-Sweaters-Team-Shot.jpg",
                    rating: "7.8"
                },
                {
                    title: "The Wolf Of Wall Street",
                    imgUrl: "https://www.thewolfofwallstreetmovie.co.uk/wp-content/uploads/2019/01/cropped-header.jpg",
                    rating: "8.2"
                },
                {
                    title: "Cruella",
                    imgUrl: "https://static2.srcdn.com/wordpress/wp-content/uploads/2021/05/Cruella-Character-Poster-Header.jpg",
                    rating: "7.4"
                },
                {
                    title: "John Wick 2",
                    imgUrl: "https://i1.wp.com/www.heyuguys.com/images/2016/10/John-Wick-2.jpg?fit=1200%2C600&ssl=1",
                    rating: "7.5"
                },
            ]
        }
    }
}
</script>

<style>
    .all-films{
        position:absolute;
        display:flex;
        flex-direction: column;
        align-items: center;
        background: radial-gradient(#080a0f, #0b0d14);
        color: #fff;
        width: 100%;
        min-height: 100%;
    }
    .film-container{
        display:flex;
        flex-direction: column;
    }
    .film-container h1{
        margin-left:10%;
        margin-bottom: 20px;
    }
    .film-container-item{
        margin-bottom: 40px;
        position:relative;
        width:80%;
        max-height:500px;
        margin-left:10%;
        box-sizing: content-box;
        overflow:hidden;
        border-radius: 7px;
        box-shadow:5px 5px 10px #000,
                   -5px -5px 10px #000;
        cursor:pointer;
        transition:0.2s ease;
    }
    .film-container-item:hover{
        transform: scale(1.03);
    } 
    .film-container-item:hover .more-about{
        opacity:1;
        z-index:2;
    } 
</style>