<template>
  <div>
    <div class="center">
      <h1>Catálogo de películas</h1>
    </div>
    <ion-grid>
      <ion-row>
        <ion-col fixed size-xs="12" size-sm="6" size-lg="4" size-xl="2" v-for="(film, index) in films" :key="index">
          <ion-card class="pa-4">
            <img height="350" width="100" :src="imgBasePath+film.poster_path" />
            <ion-card-header>
              <ion-card-title>{{ film.title }}</ion-card-title>
            </ion-card-header>
 
            <ion-card-content>
              {{ film.overview }}
            </ion-card-content>
            <ion-button @click="goToDetail(film)" expand="block">Show detail</ion-button>
          </ion-card>

        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
</template>
<script>
import ServicesMovies from '@/services/srv-movies'
export default {
  name: 'Home',
  data(){
    return{
      films:[],
      imgBasePath: process.env.VUE_APP_IMG_PATH
    }
  },
  created(){
    this.getMovies()
  },
  methods:{
    getMovies(){
      ServicesMovies.getMovies().then((response) => {
        this.films = response.data.results
      }).catch((error) => {
        return error
      })
    },
    goToDetail(film){
      this.$router.push({name: 'Detail', params: {id: film.id}})
    }
  }
}
</script>