import express from 'express';
import productRouter from "./services/products/productRouter.js"
import listEndpoints  from "express-list-endpoints"
import createDefaultTables from "./db/createDefaultTables.js"

const server = express();


server.use(express.json())


server.use("/products" , productRouter)


const port = process.env.PORT


console.table(listEndpoints(productRouter))


server.listen((port), async () => {
    console.log("Server Ruunning" ,port)
    await createDefaultTables()
})