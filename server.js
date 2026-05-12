import express from 'express';
import disparoRouter from "./src/routes/disparo.route.js"

const app = express()
const port = 3001

app.use(express.json())
app.use('/disparo', disparoRouter)

app.listen(port, () => {
    console.log("Running")
})