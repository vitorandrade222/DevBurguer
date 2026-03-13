// metodos http ->
/* 
POST => criar 
PUT/PATCH => atualizar
GET => listar/buscar
DELETE => deletar
*/

import multer from 'multer'
import { Router } from 'express'
import multerConfig from './config/multer.cjs'
import SessionController from './app/controllers/SessionController.js'
import UserController from './app/controllers/UserController.js'
import ProductController from './app/controllers/ProductController.js'
import CategoryController from './app/controllers/CategoryController.js'
import authMiddleware from './app/middlewares/auth.js'
import adminMiddleware from './app/middlewares/admin.js'
import OrderController from './app/controllers/OrderController.js'
import CreatePaymentIntent from './app/controllers/stripe/CreatePaymentIntentController.js'
const routes = new Router()

const upload = multer(multerConfig)

routes.post('/users', UserController.store) //  CADASTRO
routes.post('/sessions', SessionController.store) // LOGIN
routes.get('/categories', CategoryController.index)
routes.get('/products', ProductController.index)
routes.get('/orders/', OrderController.index)

routes.post('/create-payment-intent', CreatePaymentIntent.store)

routes.use(authMiddleware) // TODAS AS ROTAS ABAIXO PRECISA DE AUTH

routes.post(
  '/products',
  adminMiddleware,
  upload.single('file'),
  ProductController.store,
)
routes.put(
  '/products/:id',
  adminMiddleware,
  upload.single('file'),
  ProductController.update,
)

routes.post(
  '/categories',
  adminMiddleware,
  upload.single('file'),
  CategoryController.store,
)
routes.put('/orders/:id', adminMiddleware, OrderController.update)
routes.post('/orders', adminMiddleware, OrderController.store)
routes.put(
  '/categories/:id',
  adminMiddleware,
  upload.single('file'),
  CategoryController.update,
)

export default routes
