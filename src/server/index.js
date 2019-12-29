import Koa from 'koa'

const app = new Koa()

app.use(async (ctx) => {
  ctx.body = 'Koa server started'
})

app.listen(8080)
