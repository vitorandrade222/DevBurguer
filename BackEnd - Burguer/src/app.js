import express from 'express'
import routes from './routes.js'
import FileRouteConfig from './config/fileRoutes.cjs'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/product-file', FileRouteConfig)
app.use('/category-file', FileRouteConfig)

app.use(routes)

export default app
