import scrollHandlerMixin from "../mixins/scrollHandler"

export default{
    install: (app) => {
        app.mixin(scrollHandlerMixin),
        app.config.globalProperties.$filters = {
            upperCase(val){
                return val.toUpperCase;
            }
        } 
    }
}