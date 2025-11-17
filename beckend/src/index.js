import express, { request, response } from "express"
import mysql from   "mysql2"
import cors from "cors"

const {DATABASE_HOST,DATABASE_NAME,DATABASE_USER,DATABASE_PASSWORD} = process.env

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

app.get("/", (request, response) => {
    const selectCommand = "SELECT name,email,age FROM pedrootavio_02mc"


    database.query(selectCommand, (error, users) =>{
        if(error){
            console.log(error)
            return
        }

        response.json(users)
    })


 })


app.post("/cadastrar",(request,response ) =>{
    const {name,email,age,password} = request.body.user


//guardar usuário no banco de dados
const insertCommand = `

INSERT INTO pedrootavio_02mc(name,email,age,password)
VALUES (?,?,?,?)

`
 

database.query(insertCommand,[name,email,age,password], (error) =>{
    if(error){
        console.log(error)
        return
    }

            response.status(201).json({message:"Usuário cadastrado com sucesso!"})

})


 })


app.listen(port, () =>{

console.log(`Servidor rodando na porta: ${port}`)


})

const database = mysql.createPool({
database:DATABASE_NAME,
host: DATABASE_HOST,
user: DATABASE_USER,
password: DATABASE_PASSWORD,
connectionLimit: 10
})