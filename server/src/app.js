import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'

const app = express()

app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173', credentials: true }))
app.use(express.json())
app.use(cookieParser())
app.get('/api/health', (_request, response) => response.json({ status: 'ok' }))

export default app
