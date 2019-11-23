import Vue from 'vue'
import Vuex from 'vuex'

import Qualities from "./Qualities";
import Fabrics from "./Textiles/Fabrics";
import Leathers from "./Textiles/Leathers";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Qualities,
        Fabrics,
        Leathers
    },
    mutations: {},
    actions: {},
    modules: {}
})
