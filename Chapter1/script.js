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
    // Computed properties
    computed: {
        notePreview () {
            // Markdown rendered to HTML
            return marked (this.content)
        },
    },


    watch: {
        // Watching 'content' data preoperty
        content: {
            content (val, oldVal) {
                console.log('new note:', val, 'old note:', oldVal)
                localStorage.setItem('content', val)
            },
        },
    },
})