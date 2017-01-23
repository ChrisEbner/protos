import Vue from 'vue'

const results = Vue.component('s-results', {
    template:`
        <div class="results">
            <ul class="results_list">
                <li v-for="result in results">
                    {{result}}
                </li>
            </ul>
        </div>
    `,
    props: ['results'],
    data: function() {
        return {
            results: [],
        }
    },
})

export default results;