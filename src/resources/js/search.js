import Vue from 'vue'

const search = Vue.component('s-search', {
    template:`<div class="search_container">
            <form class="search_form">
                <div class="input_group">
                    <label class="input_label" for="searchterm">Suche</label>
                    <input
                        class="input_searchterm"
                        type="text" name="searchterm"
                        ref="input"
                        v-on:input="updateValue($event.target.value)" />
                </div>
                <div class="input_group">
                    <button v-on:click="search($event)" :disabled="buttonDisabled">Search</button>
                </div>
        </div>`,
    methods: {
        updateValue: function (value) {
            this.searchterm = value
        },
        search: function (e) {
            e.preventDefault();
            this.$emit('search', this.searchterm)
        }
    },
    data: function() {
        return {
            searchterm: ''
        }
    },
    computed: {
        buttonDisabled: function() {
            return (this.searchterm === '') ? true : false;
        }
    }
})

export default search;