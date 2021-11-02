import express from 'express';
import productRouter from "./services/products/productRouter.js"
import listEndpoints  from "express-list-endpoints"
import createDefaultTables from "./db/createDefaultTables.js"
import reviewsRouter from "./services/reviews/reviewsRouter.js"

const server = express();

server.use(express.json())

//Routes

server.use("/products" , productRouter)

server.use("/reviews", reviewsRouter)


const port = process.env.PORT


console.table(listEndpoints(productRouter))


server.listen((port), async () => {
    console.log("Server Ruunning" ,port)
    await createDefaultTables()
})