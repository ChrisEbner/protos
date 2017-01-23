require('../styles/index.pcss')

import Vue from 'vue'
import search from './search'
import results from './results'

const app = new Vue({
    el: '#app',
    template:`
    <div>
        <h1>Hello!</h1>
        <s-search v-on:search="search"></s-search>
        <p v-if="searchTerm !== ''">You are searching for: {{searchTerm}}</p>
        <s-results v-if="searchResults.length > 0" v-bind:results="searchResults"></s-results>
    </div>`,
    data: {
        name: 'SERP',
        searchvalue: '',
        searchResults: ['a', 'b'],
    },
    methods: {
        search: function(s) {
            this.searchvalue = s
        }
    },
    computed: {
        searchTerm: function() {
            return (this.searchvalue)
        }
    }
})