// New VueJS instance
new Vue({
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
        saveNote (val) {
            console.log('new note:', val, 'old note:', oldVal)
            console.log('saving note:', val)
            localStorage.setItem('content', val)
            this.reportOperation('saving')
        },
    },

    // Change watchers
    watch: {
        // Watching 'content' data preoperty
        content: {
          handler: 'saveNote',
        },
    },

    reportOperation (opName) {
        console.log('The', opName, 'operation was completed!')
    },
})