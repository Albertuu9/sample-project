<template>
    <div>
        <div class="center">
            <h3>{{ film.title }}</h3>
        </div>
            <ion-grid class="center">
                <ion-row>
                    <ion-col >
                        <img width="300" :src="imgBasePath+film.poster_path" />
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-grid class="center">
                <ion-row>
                    <ion-col>
                        <b>Title: </b><span>{{ film.title }}</span>
                        <br>
                        <br>
                        <b>Home page: </b><a :href="film.homepage">{{ film.homepage }}</a>
                        <br>
                        <br>
                        <b>Vote average: </b><span>{{ film.vote_average + ' / 10' }}</span>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-icon @click="goHome" x-large name="arrow-round-back"></ion-icon>
    </div>
</template>
<script>
import ServicesMovies from '@/services/srv-movies'
export default {
    name: 'Detail',
    data(){
        return{
            imgBasePath: process.env.VUE_APP_IMG_PATH,
            film: {}
        }
    },
    created(){
        this.getDetail()
    },
    methods:{
        getDetail(){
            let payload = {
                id: this.$route.params.id
            }
            // get film details
            ServicesMovies.getMovieDetail(payload).then((response) => {
                this.film = response.data
            }).catch((error) => {
                return error
            })
        },
        goHome(){
            this.$router.go(-1)
        }
    }
}
</script>