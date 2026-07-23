import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import authRoutes from './api/routes/auth'
import {authMiddleware} from "./utils/auth";
import userRoute from "./api/routes/user";

const app = new Hono().basePath("/api/v1")

// Middleware
app.use('*', logger())
app.use('*', cors({
  origin: [
    process.env.FRONTEND_URL!,
    process.env.WORKER_URL!
  ],
  credentials: true,
}))

// Health check
app.get('/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// API routes
app.get('/', (c) => {
  return c.json({ message: 'Flott API Server' })
})

app
// Auth routes
  .route('/auth', authRoutes)
// Auth Middleware
  .use(authMiddleware)
// User routes
  .route('/user', userRoute)


export default app
