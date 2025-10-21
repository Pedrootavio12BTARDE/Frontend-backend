import express, { response } from "express"
import {people} from "./people.js"
import cors from "cors"


const app = express()
const port = 3333

app.use(cors())
 
app.get("/", (request, response) => {
    response.json(people)
})


app.listen(port, () =>{

console.log(`Servidor rodando na porta: ${port}`)


})