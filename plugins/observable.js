import Vue from 'vue'
import state from '~/state'

export default (ctx, inject) => {
    if (process.server) {
        ctx.$state = Vue.observable(state())
        ctx.ssrContext.nuxt.observable = ctx.$state
    } else {
        ctx.$state = Vue.observable(window.__NUXT__.observable)
    }    
    inject('state', ctx.$state)
}
