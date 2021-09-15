import { createApp } from 'vue'
import { createStore } from 'vuex'

import reactions from '../modules/reactions'

export default createStore({
  modules: { reactions }
})