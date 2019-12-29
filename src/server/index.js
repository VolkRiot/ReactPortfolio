import Koa from 'koa'
import compress from 'koa-compress'

const app = new Koa()

app.use(compress({
  // eslint-disable-next-line
  filter(content_type) {
    return /text/i.test(content_type)
  },
  threshold: 2048,
  // eslint-disable-next-line
  flush: require('zlib').Z_SYNC_FLUSH,
}))

app.use(async (ctx) => {
  ctx.body = 'Koa server started'
})

app.listen(8080)
