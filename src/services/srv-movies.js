import HTTP from '@/config/axios'

const ServicesMovies = {

  // get WS all data
  getMovies(payload) {
    return HTTP.post(process.env.VUE_APP_BASE_PATH + 'popular?api_key='+process.env.VUE_APP_API_KEY+'&language=en-US&page=1', payload).then((response) => {
      return response
    }).catch((error) => {
      return error
    })
  },
  // get detail
  getMovieDetail(payload) {
    return HTTP.get(process.env.VUE_APP_BASE_PATH + payload.id + '?api_key='+process.env.VUE_APP_API_KEY+'&language=en-US&page=1').then((response) => {
      return response
    }).catch((error) => {
      return error
    })
  }

}

export default ServicesMovies