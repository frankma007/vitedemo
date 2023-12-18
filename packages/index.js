import HelloWorld from './components/HelloWorld.vue'
import demo1 from './components/demo1.vue'
/* export default (app)=>{
    app.component('HelloWorld',HelloWorld)
    app.component('demo1',demo1)
} */
/* export default
(app)=>{
   
    
} */
const myPlugin={
    install: (app, options) => {
        app.component('HelloWorld',HelloWorld)
    app.component('demo1',demo1)
      }
}
export default myPlugin
