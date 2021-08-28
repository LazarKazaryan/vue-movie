export default {
    methods: {
        onScrollEnd(){
            console.warn("You must override onScrollEnd method")
        },
        onScroll(event){
            const container = event.target;
            if(container.scrollHeight <= container.clientHeight + container.scrollTop){
                this.onScrollEnd()
            }
        }
    }
}