import express from "express";
import cors from 'cors'

import db from "./database/db.js";

import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
   await db.authenticate()
   console.log(' conexion exitosa a la db')
} catch (error) {

    console.log(`el error de conexion es: ${error}`)

    
}

/*
app.get('/', (req, res) => {
    res.send('hola Mundo')
})
*/
app.listen(8000, () => {
    console.log(' server up running im http://localhost:8000/')
})