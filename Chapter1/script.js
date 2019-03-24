// New VueJS instance
var vm = new Vue({
    //CSS selector of the root DOM element
    el: '#notebook',
    // Some data
    data () {
        return {
            content: 'This is a note.',
        }
        
    },
    template: '<div>{{ notePreview }}</div>' ,
    // Computed properties
    computed: {
        notePreview () {
            // Markdown rendered to HTML
            return marked (this.content)
        },
    },

    methods: {
        saveNote () {
            console.log('saving note:', this.content)
            localStorage.setItem('content', this.content)
            this.reportOperation('saving')
        },
    },

    // Change watchers
    watch: {
        // Watching 'content' data preoperty
        content (val, oldVal) {
          console.log('new note:', val, 'old note:', oldVal)
          console.log('saving note:', this.content)
          localStorage.setItem('content', this.content)
        },
    },

    reportOperation (opName) {
        console.log('The', opName, 'operation was completed!')
    },
})