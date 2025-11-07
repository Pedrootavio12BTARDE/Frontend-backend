import express, { request, response } from "express"
import {people} from "./people.js"
import cors from "cors"


const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

app.get("/", (request, response) => {
    response.json(people)
})


app.post("/cadastrar",(request,response ) =>{
    const {name,email,age,password} = request.body.user



    console.log (`
       Nome : ${name},
       E-mail : ${email},
       Idade :${age},
       Senha : ${password}

        `)

        response.status(201).json({message:"Usuário cadastrado com sucesso!"})

 })


app.listen(port, () =>{

console.log(`Servidor rodando na porta: ${port}`)


})