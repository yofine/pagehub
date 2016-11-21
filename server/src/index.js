import Koa from 'koa'
const app = new Koa()

app.use(ctx => {
  ctx.body = 'hello node'
})

app.listen(3000, () => {
  console.log('listening 3000')
})
