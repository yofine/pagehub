import Koa from 'koa'
import router from 'koa-router'
const Router = router()
const app = new Koa()

Router.get('/', ctx => {
  ctx.body = 'hello node'
})
app.use(Router.routes())

app.listen(3000, () => {
  console.log('listening 3000')
})
