import reactions from '../mocks/reactions'

const loadReactions = (time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(reactions)
      },time)
    })
}

export default {
    namespaced: true,
    state () {
        return {
          reactions: [
    
          ]
        }
      },
      mutations: {
        SET_REACTIONS(state, pld){
          state.reactions = pld
        }
      },
      getters: {
        getReactions(state){
          return state.reactions
        }
      },
      actions: {
        async loadReactions({ commit }, pld){
          try{
            const reactions = await loadReactions(pld);
            commit("SET_REACTIONS", reactions)
          }catch (e){
            console.log(e)
          }
        }
      }
}