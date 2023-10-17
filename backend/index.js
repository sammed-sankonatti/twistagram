import express from "express"
const app = express()
import dotenv from "dotenv"
import helmet from "helmet"
dotenv.config()

const PORT = process.env.APP_PORT || 8080

app.use(express.json())
app.use(helmet())

app.listen(PORT, ()=> {
    console.log(`listening on ${PORT}`);
})