import HTTP from '@/config/axios'

const ServicesMovies = {

  // get WS all data
  getMovies(payload) {
    return HTTP.post(process.env.VUE_APP_BASE_PATH + '?i=tt3896198&apikey=fec9f8b6', payload).then((response) => {
      return response
    }).catch((error) => {
      return error
    })
  }

}

export default ServicesMovies