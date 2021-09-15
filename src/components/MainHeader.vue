<template>
    <header class="header">
        <div class="container">
            <div class="header-row">
                <div class="header-row-title">
                    <h3>Cinema</h3>
                </div>
                <nav class="header-row-navbar navbar navbar-expand-lg">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <span class="nav-link active" aria-current="page" @click="this.$router.push({ name: 'films' })">Films</span>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="header-row-sign-in">
                    <button class="btn btn-outline-light" @click="changeUserState">Sign in</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data(){
        return{
            auth:false
        }
    },
    created(){
        this.auth = localStorage.getItem("auth") !== null
    },
    methods:{
        changeUserState(){
            if(this.auth){
                localStorage.removeItem("auth")
                this.$router.push({ name: 'main' })
            }else{
                localStorage.setItem("auth", true)
                this.auth = true
            }
        },
        modalOpen(){
            document.querySelector(".modal").classList.add("modal-show")
        }
    }
}
</script>

<style>
    .header{
        background-color: #000;
    }
    .header-row{
        width:80%;
        margin-left: 10%;
        padding:10px 0;
        overflow: hidden;
    }
    .header-row-title{
        margin:.5rem 0;
        float:left;
        margin-right: 3%;
        color: #dc3545;
    }
    .header-row-navbar{
        float:left;
    }
    .list{
        list-style: none;
        display:flex;
        gap: 30px;
    }
    .list-item{
        font-size: 18px;
    }
    .header-row-sign-in{
        margin:.5rem 0;
        float:right;
    }
    .nav-link{
        text-decoration: none;
        cursor:pointer;
        font-size:15px;
        color: #fff;
        font-size:18px;
        transition:0.2s ease;
    }
    .nav-link:hover{
        color: #860a17;
    }
    .modal{
        opacity:0;
        transition:0.5s ease;
    }
    .modal-show{
        display:block;
        opacity:1;
    }
</style>