export const state = () => ({
    lat: 52.529562,
    lng: 13.413047
  })
  
  export const mutations = {
    setLat (state, lat) {
      state.lat = lat
    },
    setLng (state, lng) {
        state.lng = lng
      }
  }