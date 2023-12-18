// import HelloWorld from './components/HelloWorld.vue'
import DefinedIcon from './components/DefinedIcon.vue'
import DefinedButton from './components/DefinedButton.vue'
//全局组件方式
/* export default (app)=>{
    app.component('HelloWorld',HelloWorld)
    app.component('DefinedIcon',DefinedIcon)
} */

const myPlugin = {
    install: (app, options) => {
        // app.component('HelloWorld', HelloWorld)
        app.component('DefinedIcon', DefinedIcon)
        app.component('DefinedButton', DefinedButton)
    }
}
export default myPlugin
