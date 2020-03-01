export const state = () => ({
    currentSpotPayment: ''
  })
  
  export const mutations = {
    setCurrentSpotPayment (state, payment) {
      state.currentSpotPayment = payment
    }
  }