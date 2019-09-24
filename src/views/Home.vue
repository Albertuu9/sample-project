<template>
  <div>
    <div class="center">
      <h1>Catálogo de películas</h1>
    </div>
    <ion-grid>
      <ion-row>
        <ion-col
          fixed
          size-xs="12"
          size-sm="6"
          size-lg="4"
          size-xl="3"
          v-for="(value, index) in 8"
          :key="index"
        >
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              <ion-card-title>Card Title</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              Keep close to Nature's heart... and break clear away, once in awhile,
              and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </ion-card-content>
          </ion-card>

        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
</template>
<script>
import ServicesMovies from '@/services/srv-movies'
export default {
  created(){

  },
  methods:{
    getMovies(){
      ServicesMovies.getMovies().then((response) => {
        return response
      }).catch((error) => {
        return error
      })
    }
  }
}
</script>