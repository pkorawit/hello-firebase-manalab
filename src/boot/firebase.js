import Vue from 'vue'
import { app, db, auth, storage} from '../services/firebase'

Vue.prototype.$firebase = app
Vue.prototype.$db = db
Vue.prototype.$auth = auth
Vue.prototype.$storage = storage
