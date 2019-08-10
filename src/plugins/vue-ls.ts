import Vue from 'vue'
import LocalStorage from 'vue-ls'

// set local storage config.
const lsOptions = {
	namespace: 'portfolio__', // key prefix
	name: 'ls', // name variable Vue.[ls] or this.[$ls],
	storage: 'local' // storage name session, local, memory
}

Vue.use(LocalStorage, lsOptions)
